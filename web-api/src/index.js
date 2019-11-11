const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const log = require('./utils/log');
const user = require('./router/user');
const todo = require('./router/todo');

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/todos', todo);
app.use('/users', user);

app.use((err, __req, res, __next) => {
  log.error(err.message);

  return res.status(500).json({
    message: 'Oops, something went wrong',
  });
});

app.listen(port, () => log.info('Web Api is up'));
