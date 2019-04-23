const users = require('./data/users');

module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('users', users, {}),
  down: (queryInterface) => queryInterface.bulkDelete('users', null, {}),
};
