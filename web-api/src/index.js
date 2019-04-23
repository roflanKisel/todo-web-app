const express = require('express');
const bodyParser = require('body-parser');

const log = require('./utils/log');
const user = require('./router/user');

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (__req, res) => {
  log.info('in root');
  res.send('root');
});

app.use('/users', user);

app.listen(port, () => console.log(`Web Api is listening on port ${port}`));
