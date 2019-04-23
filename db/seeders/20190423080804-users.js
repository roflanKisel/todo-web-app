const models = require('../models');
const users = require('./data/users');

module.exports = {
  up: (queryInterface) => {
    const protectedUsers = users.map((user) => ({
      ...user, password: models.User.generateHash(user.password),
    }));

    return queryInterface.bulkInsert('users', protectedUsers, {});
  },
  down: (queryInterface) => queryInterface.bulkDelete('users', null, {}),
};
