const constants = require('../config/constants');
const proc = require('process');
const env = require('../config/env');

function logMessage(msg, level = 'INFO', req = null) {
  const logMessage = {
    name: constants.PROCESS_NAME,
    pid: proc.pid,
    level,
    msg,
    time: new Date(),
    tid: req && req.header('x-tid') ? req.header('x-tid') : Date.now()
  };
  console.log(JSON.stringify(logMessage));
}

function debug(msg, req = null) {
  if (env.logLevel === 'DEBUG') {
    logMessage(msg, 'DEBUG', req);
  }
}

function info(msg, req = null) {
  if (env.logLevel === 'DEBUG' || env.logLevel === 'INFO') {
    logMessage(msg, 'INFO', req);
  }
}

function error(msg, req = null) {
  logMessage(msg, 'ERROR', req);
}

function warn(msg, req = null) {
  if (
    env.logLevel === 'DEBUG' ||
    env.logLevel === 'INFO' ||
    env.logLevel === 'WARN'
  ) {
    logMessage(msg, 'WARN', req);
  }
}

module.exports = { debug, info, warn, error };
