const createLogger = require('logger-client');

const serviceName = 'web-api';
const loggerUrl = process.env.LOGGER_URL || 'http://localhost:1337';

module.exports = createLogger(serviceName, loggerUrl);
