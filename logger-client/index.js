const axios = require('axios');

const HttpLogger = axios.create();

const createLogger = (serviceName, url) => {
  HttpLogger.defaults.baseURL = url;
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

  return log;
};

module.exports = createLogger;
