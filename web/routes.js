const routes = require('next-routes');

module.exports = routes()
  .add('index', '/', 'index')
  .add('signin')
  .add('signup')
  .add('todo-editor', '/todo/create', 'todo-editor');
