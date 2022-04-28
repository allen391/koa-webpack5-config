/**
 * log encapsulation
 * @author Allen Chen
 */

const log4j = require('log4js');
const levels = {
  trace: log4j.levels.TRACE,
  debug: log4j.levels.DEBUG,
  info: log4j.levels.INFO,
  warn: log4j.levels.WARN,
  error: log4j.levels.ERROR,
  fatal: log4j.levels.FATAL,
};

// log4j To configure
log4j.configure({
  appenders: {
    console: { type: 'console' },
    info: {
      type: 'file',
      filename: 'logs/all-logs.log',
    },
    error: {
      type: 'dateFile',
      filename: 'logs/log',
      pattern: 'yyyy-MM-dd.log',
      alwaysIncludePattern: true, // Set the file name to filename + pattern
    },
  },
  categories: {
    default: {
      appenders: ['console'],
      level: 'debug',
    },
    info: {
      appenders: ['info', 'console'],
      level: 'info',
    },
    error: {
      appenders: ['error', 'console'],
      level: 'error',
    },
  },
});

/**
 * Log output level by bug
 * @param { string } content
 */
exports.debug = (content) => {
  let logger = log4j.getLogger('debug');
  logger.level = levels.debug;
  logger.debug(content);
};

/**
 * Log output level by info
 * @param { string } content
 */
exports.info = (content) => {
  let logger = log4j.getLogger('info');
  logger.level = levels.info;
  logger.info(content);
};

/**
 * Log output level by error
 * @param { string } content
 */
exports.error = (content) => {
  let logger = log4j.getLogger('error');
  logger.level = levels.error;
  logger.error(content);
};
