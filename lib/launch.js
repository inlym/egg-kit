'use strict'

const stringKit = require('../lib/string.js')

module.exports = (app) => {
  app.kit = Object.assign({}, stringKit)
}
