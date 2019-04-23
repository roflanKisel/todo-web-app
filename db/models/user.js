module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {isEmail: true},
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

  User.associate = ({Todo}) => {
    User.hasMany(Todo, {
      as: 'todo',
      tableName: 'users',
      foreignKey: 'user_id',
      sourceKey: 'id',
    });
  };

  return User;
};