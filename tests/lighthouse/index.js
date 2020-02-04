const fs = require('fs')
const path = require('path')
const { dim, green } = require('kleur')
const taskz = require('taskz')
const chromeLauncher = require('chrome-launcher')
const lighthouse = require('lighthouse')
const { getVersion, transformVersion } = require('../../utils/version')

// TODO: test a project site as well
const testSite = 'https://marvin.lcl'

const rootPath = path.resolve(__dirname, '..', '..')
const version = transformVersion(getVersion(), ['major', 'minor'])
const destDir = path.resolve(rootPath, 'reports', `v${version}.0`)
let browserInstance = undefined

// https://github.com/GoogleChrome/lighthouse/blob/master/docs/readme.md#using-programmatically
// https://github.com/GoogleChrome/lighthouse/blob/master/docs/configuration.md

let options = {
  // chromeFlags: ['--headless'],
  output: 'html',
  logLevel: 'silent', // info | verbose | silent
}

let lighthouseConfig = {
  extends: 'lighthouse:default',
  settings: {
    // onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo', 'pwa'],
    // skipAudits: ['seo/canonical'],
  },
}

/**
 * Launch browser.
 */
function launchBrowser() {
  return new Promise((resolve) => {
    if (browserInstance) {
      return resolve('Browser already running.')
    }
    try {
      chromeLauncher
        .launch({
          chromeFlags: options.chromeFlags,
        })
        .then((chrome) => {
          browserInstance = chrome
          options.port = chrome.port
          resolve('Started browser successfully!')
        })
    } catch (error) {
      killBrowser('chrome launcher failed')
      throw new Error(error)
    }
  })
}

/**
 * Kill the browser.
 */
function killBrowser() {
  return new Promise((resolve) => {
    if (browserInstance) {
      browserInstance.kill().then(() => {
        browserInstance = undefined
        resolve('Success!')
      })
    } else {
      resolve('Not running!')
    }
  })
}

/**
 * Run lighthouse.
 *
 * @param {any} ctx taskz context
 * @param {string} device Device which lighthouse should emulate
 */
function runLighthouse(ctx, device) {
  return new Promise((resolve) => {
    ctx[device] = {} // initial set
    options.emulatedFormFactor = device

    lighthouse(testSite, options, lighthouseConfig)
      .then((results) => {
        ctx[device].results = results
        resolve()
      })
      .catch((error) => {
        killBrowser()
        throw new Error(error)
      })
  })
}

/**
 * Saving report as HTML.
 */
function saveReport(ctx, device) {
  return new Promise((resolve) => {
    const report = ctx[device].results.report

    if (!report) {
      return Promise.reject('No report!')
    }

    const filePath = path.resolve(destDir, `lhr.${device}.html`)

    fs.writeFile(filePath, report, 'utf-8', (err) => {
      if (err) {
        throw new Error(err.message)
      }
      resolve()
    })
  })
}

/**
 * Saving report as JSON.
 */
function saveLhr(ctx, device) {
  return new Promise((resolve) => {
    const lhr = ctx[device].results.lhr

    if (!lhr) {
      return Promise.reject('No lighthouse results!')
    }

    const filePath = path.resolve(destDir, `lhr.${device}.json`)

    fs.writeFile(filePath, JSON.stringify(lhr), 'utf-8', (err) => {
      if (err) {
        throw new Error(err.message)
      }
      resolve()
    })
  })
}

/**
 * Saving report screenshots.
 */
function saveScreenshot(ctx, device) {
  return new Promise((resolve) => {
    const lhr = ctx[device].results.lhr

    if (!lhr) {
      return Promise.reject('No lighthouse results!')
    }

    const filePath = path.resolve(destDir, `lhr.${device}.jpeg`)

    let imageData = lhr.audits['final-screenshot'].details.data
    imageData = imageData.replace(/^data:.*;base64,/, '')

    fs.writeFile(filePath, imageData, 'base64', (err) => {
      if (err) {
        throw new Error(err.message)
      }
      resolve()
    })
  })
}

function startReporter() {
  let devices = ['mobile', 'desktop']
  devices.forEach((device) => {
    devices[device] = taskz([
      {
        text: 'Running lighthouse...',
        stopOnError: true,
        task: (ctx) => runLighthouse(ctx, device),
      },
      {
        text: 'Saving results...',
        tasks: taskz(
          [
            {
              text: 'Saving report to html...',
              task: (ctx) => saveReport(ctx, device),
            },
            {
              text: 'Saving lhr to JSON...',
              task: (ctx) => saveLhr(ctx, device),
            },
            {
              text: 'Saving screenshots...',
              task: (ctx) => saveScreenshot(ctx, device),
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
      task: () => launchBrowser(),
    },
    {
      text: 'Running reporters...',
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
      task: () => killBrowser(),
    },
  ])

  tasks.run().then(() => {
    console.log(green('\nFinished!'))
  })
}

process.on('SIGINT', () => {
  console.log('\n' + dim('Caught interrupt signal!'))
  killBrowser()
})

startReporter()
