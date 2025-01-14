'use strict'

const { mkdir, rmdir } = require('fs').promises

const recursive = { recursive: true }

module.exports = {
  filename: url => escape(url)
    .replace(/\//g, '_')
    .replace(/%([0-9a-z]{2})/ig, (match, hexa) => `_${hexa}_`),
  cleanDir: dir => rmdir(dir, recursive),
  createDir: dir => mkdir(dir, recursive),
  recreateDir: dir => rmdir(dir, recursive).then(() => mkdir(dir, recursive)),
  extractUrl: headers => headers.referer.match(/http:\/\/[^/]+(?::\d+)?(\/.*)/)[1]
}
