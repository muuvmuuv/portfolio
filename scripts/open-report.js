const fs = require('fs')
const path = require('path')
const { red } = require('kleur')
const open = require('open')
const { getVersion, transformVersion } = require('../utils/version')

const version = transformVersion(getVersion(), ['major', 'minor'])
const versionDir = path.resolve(__dirname, '../reports', `v${version}.0`)

if (!fs.existsSync(versionDir)) {
  console.log(red(`Dir does not exist: ${versionDir} \n`))
  process.exit(1)
}

// 0: node 1: script 2: argument
const filename = process.argv[2]
const filePath = path.resolve(versionDir, filename)

if (!fs.existsSync(filePath)) {
  console.log(red(`File does not exist: ${filePath} \n`))
  process.exit(1)
}

open(filePath, {
  background: true,
})
