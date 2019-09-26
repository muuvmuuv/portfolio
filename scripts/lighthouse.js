const fs = require('fs')
const path = require('path')
const prettier = require('prettier')
const { dim, green } = require('kleur')
const taskz = require('taskz')
const chromeLauncher = require('chrome-launcher')
const lighthouse = require('lighthouse')
const { getPkgVersion } = require('./utils')

const pkgVersion = getPkgVersion()
const BASE = path.resolve(__dirname, '..')
const REPORTS = path.resolve(BASE, 'reports')
const DEST = path.resolve(REPORTS, `v${pkgVersion}`)

;({
  init() {
    this.homeUrl = 'https://marvin.lcl/'

    this.options = {
      chromeFlags: ['--headless'],
      output: 'html',
      logLevel: 'silent', // info | verbose | silent
    }

    this.config = {
      extends: 'lighthouse:default',
      settings: {
        onlyCategories: [
          'performance',
          'accessibility',
          'best-practices',
          'seo',
        ],
        skipAudits: [
          // 'byte-efficiency/uses-long-cache-ttl',
          // 'byte-efficiency/uses-webp-images',
          // 'byte-efficiency/render-blocking-resources',
          // 'byte-efficiency/unused-css-rules',
        ],
      },
    }

    // Catch the unhandled
    process.on('SIGINT', () => {
      console.log('\n' + dim('Caught interrupt signal!'))
      this.destroy('unhandled catch called')
    })

    process.on('exit', () => {
      this.destroy('exit called')
    })

    // GoGoGo
    this.run()
  },

  /**
   * If chrome is available kill it.
   */
  destroy(reason) {
    if (this.chrome) {
      // console.log('Trying to kill Chrome because ' + reason)
      this.chrome.kill()
      this.chrome = null
    }
  },

  /**
   * Launch chrome.
   */
  async launchChrome() {
    if (this.chrome) {
      return Promise.resolve('Chrome already running.')
    }
    let chrome
    try {
      chrome = await chromeLauncher.launch({
        chromeFlags: this.options.chromeFlags,
      })
    } catch (error) {
      this.destroy('chrome launcher failed')
      throw new Error(error)
    }
    this.options.port = chrome.port
    this.chrome = chrome
    return Promise.resolve()
  },

  /**
   * Run lighthouse.
   *
   * @param {string} device Device which lighthouse should emulate
   */
  async runLighthouse(ctx, device) {
    return new Promise(resolve => {
      this.options.emulatedFormFactor = device
      lighthouse(this.homeUrl, this.options, this.config)
        .then(results => {
          ctx[device] = {} // initial set
          ctx[device].results = results
          resolve()
        })
        .catch(error => {
          this.destroy('lighthouse failed')
          throw new Error(error)
        })
    })
  },

  /**
   * Beautify report with prettier.
   */
  beautifyData(string, parser) {
    return new Promise(resolve => {
      const rgxComments = /(<!--|\/\*)[\s\S]*?(-->|\*\/)/g
      string = string.replace(rgxComments, '') // remove all comments
      prettier
        .resolveConfig(BASE, {
          editorconfig: true,
          useCache: true,
        })
        .then(opts => {
          opts.parser = parser
          const result = prettier.format(string, opts)
          resolve(result)
        })
    })
  },

  /**
   * Saving report as HTML.
   */
  async saveReport(ctx, device) {
    let report = ctx[device].results.report

    if (!report) {
      return Promise.reject('No report!')
    }

    report = await this.beautifyData(report, 'html')

    return new Promise(resolve => {
      const fileName = `lhr.${device}.html`
      const filePath = path.resolve(DEST, fileName)
      fs.writeFile(filePath, report, 'utf-8', err => {
        if (err) {
          throw new Error(err.message)
        }
        resolve()
      })
    })
  },

  /**
   * Saving report as JSON.
   */
  async saveLhr(ctx, device) {
    let lhr = ctx[device].results.lhr

    if (!lhr) {
      return Promise.reject('No lighthouse results!')
    }

    lhr = await this.beautifyData(JSON.stringify(lhr), 'json')

    return new Promise(resolve => {
      const fileName = `lhr.${device}.json`
      const filePath = path.resolve(DEST, fileName)
      fs.writeFile(filePath, lhr, 'utf-8', err => {
        if (err) {
          throw new Error(err.message)
        }
        resolve()
      })
    })
  },

  /**
   * Saving report screenshots.
   */
  async saveScreenshot(ctx, device) {
    let lhr = ctx[device].results.lhr

    if (!lhr) {
      return Promise.reject('No lighthouse results!')
    }

    return new Promise(resolve => {
      const fileName = `lhr.${device}.jpeg`
      const filePath = path.resolve(DEST, fileName)

      let imageData = lhr.audits['final-screenshot'].details.data
      imageData = imageData.replace(/^data:.*;base64,/, '')

      fs.writeFile(filePath, imageData, 'base64', err => {
        if (err) {
          throw new Error(err.message)
        }
        resolve()
      })
    })
  },

  /**
   * GoGoGo
   */
  async run() {
    const devices = ['mobile', 'desktop']
    devices.forEach(device => {
      devices[device] = taskz([
        {
          text: 'Running lighthouse...',
          stopOnError: true,
          task: ctx => this.runLighthouse(ctx, device),
        },
        {
          text: 'Saving results...',
          tasks: taskz(
            [
              {
                text: 'Saving report to html...',
                task: ctx => this.saveReport(ctx, device),
              },
              {
                text: 'Saving lhr to JSON...',
                task: ctx => this.saveLhr(ctx, device),
              },
              {
                text: 'Saving screenshots...',
                task: ctx => this.saveScreenshot(ctx, device),
              },
            ],
            { parallel: true }
          ),
        },
      ])
    })

    const tasks = taskz([
      {
        text: 'Launching chrome...',
        stopOnError: true,
        task: () => this.launchChrome(),
      },
      {
        text: 'Running reporter...',
        tasks: taskz(
          [
            {
              text: 'Creating report for mobile...',
              tasks: devices.mobile,
            },
            {
              text: 'Creating report for desktop...',
              tasks: devices.desktop,
            },
          ],
          { parallel: false }
        ),
      },
      {
        text: 'Killing chrome...',
        task: () => this.destroy('all tasks ended'),
      },
    ])

    await tasks.run()
    console.log(green('\nFinished!'))
  },
}.init())
