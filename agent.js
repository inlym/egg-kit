'use strict'

const launch = require('./lib/launch.js')

module.exports = (agent) => {
  if (agent.config.kit.agent) {
    launch(agent)
  }
}
