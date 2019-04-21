const express = require('express');
const bodyParser = require('body-parser');

const {collectInfo} = require('./utils');

const app = express();
const port = process.env.PORT || 1337;

app.use(bodyParser.urlencoded({extended: false}));

const handleError = (req, __res, next) => {
  console.error(req.logInfo);
  next();
};

const handleWarn = (req, __res, next) => {
  console.warn(req.logInfo);
  next();
};

const handleInfo = (req, __res, next) => {
  console.info(req.logInfo);
  next();
};

const handleDebug = (req, __res, next) => {
  console.debug(req.logInfo);
  next();
};

const sendStatus = (__req, res) => res.sendStatus(200);

app.post('*', collectInfo);

app.post('/error', handleError, sendStatus);
app.post('/warn', handleWarn, sendStatus);
app.post('/info', handleInfo, sendStatus);
app.post('/debug', handleDebug, sendStatus);

app.listen(port, () => console.log(`Logger is listening on port ${port}`));
