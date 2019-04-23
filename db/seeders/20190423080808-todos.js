const todos = require('./data/todos');

module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('Todos', todos, {}),
  down: (queryInterface) => queryInterface.bulkDelete('Todos', null, {}),
};
