const express = require('express');

const log = require('./utils/log');

const app = express();
const port = process.env.PORT || 8080;

app.get('/', (__req, res) => {
  log.info('in root');
  res.send('root');
});

app.listen(port, () => console.log(`Web Api is listening on port ${port}`));
