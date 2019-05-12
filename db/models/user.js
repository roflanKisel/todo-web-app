const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {isEmail: true},
      unique: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {notEmpty: true},
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {notEmpty: true},
    },
  }, {});

  User.generateHash = (password) => (
    bcrypt.hashSync(password, bcrypt.genSaltSync(8))
  );

  User.prototype.validatePassword = function validatePassword(password) {
    const {password: userPassword} = this.get();

    return bcrypt.compareSync(password, userPassword);
  };

  User.prototype.toJSON = function toJSON() {
    const fields = {...this.get()};

    delete fields.password;
    delete fields.createdAt;
    delete fields.updatedAt;

    return fields;
  };

  User.associate = ({Todo}) => {
    User.hasMany(Todo, {
      as: 'todo',
      tableName: 'users',
      foreignKey: 'userId',
      sourceKey: 'id',
    });
  };

  return User;
};
