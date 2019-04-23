const axios = require('axios');

const HttpLogger = axios.create();

const serviceName = 'web-api';

HttpLogger.defaults.baseURL = process.env.LOGGER_URL || 'http://localhost:1337';
HttpLogger.interceptors.request.use((request) => {
  request.data.name = serviceName;
  return request;
});

const log = {
  info(message) {
    return HttpLogger.post('/info', {message});
  },
  debug(message) {
    return HttpLogger.post('/debug', {message});
  },
  warn(message) {
    return HttpLogger.post('/warn', {message});
  },
  error(message) {
    return HttpLogger.post('/error', {message});
  },
};

module.exports = log;
