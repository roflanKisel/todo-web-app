const express = require('express');
const bodyParser = require('body-parser');

const log = require('./utils/log');
const user = require('./router/user');
const todo = require('./router/todo');

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/todos', todo);
app.use('/users', user);

app.listen(port, () => log.info('Web Api is up'));
