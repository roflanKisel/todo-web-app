module.exports = {
  up: (queryInterface, Sequelize) => (
    queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {isEmail: true},
        unique: true,
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {notEmpty: true},
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {notEmpty: true},
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    })
  ),
  down: (queryInterface) => queryInterface.dropTable('users'),
};
