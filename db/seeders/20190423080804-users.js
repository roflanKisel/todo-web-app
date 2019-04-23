const models = require('../models');
const users = require('./data/users');

module.exports = {
  up: (queryInterface) => {
    const protectedUsers = users.map((user) => ({
      ...user, password: models.User.generateHash(user.password),
    }));

    return queryInterface.bulkInsert('Users', protectedUsers, {});
  },
  down: (queryInterface) => queryInterface.bulkDelete('Users', null, {}),
};
