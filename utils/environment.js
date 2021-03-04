const path = require("path")

const activeEnvironment =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"

const isDevelopment = activeEnvironment === "development"
const isProduction = activeEnvironment === "production"
const isAudit = process.env.AUDIT || false
const isCI = process.env.CI || false

const projectRoot = path.resolve(__dirname, "..")
const buildPath = path.resolve(__dirname, "..", "build")

module.exports = {
  activeEnvironment,
  isDevelopment,
  isProduction,
  isAudit,
  isCI,
  projectRoot,
  buildPath,
}
