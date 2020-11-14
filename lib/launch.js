'use strict'

const stringKit = require('../lib/string.js')
const imageKit = require('../lib/image.js')

module.exports = (app) => {
  app.kit = Object.assign({}, stringKit, imageKit)
}
