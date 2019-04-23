const todos = require('./data/todos');

module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('todos', todos, {}),
  down: (queryInterface) => queryInterface.bulkDelete('todos', null, {}),
};
