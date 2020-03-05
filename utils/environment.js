const path = require('path')

const { getVersion, transformVersion } = require('./version')

const activeEnv = process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || 'development'

const isDev = activeEnv === 'development'
const isProd = activeEnv === 'production'
const isAudit = process.env.AUDIT || false
const isCI = process.env.CI || false

const projectRoot = path.resolve(__dirname, '..')
const buildPath = path.resolve(__dirname, '..', 'build')
const reportsPath = path.join(
  projectRoot,
  'reports',
  `v${transformVersion(getVersion(), ['major', 'minor'])}.0`
)

module.exports = {
  activeEnv,
  isDev,
  isProd,
  isAudit,
  isCI,
  projectRoot,
  buildPath,
  reportsPath,
}
