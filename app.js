'use strict'

const launch = require('./lib/launch.js')

module.exports = (app) => {
  if (app.config.kit.app) {
    launch(app)
  }
}
