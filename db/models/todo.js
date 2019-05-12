module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define('Todo', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {notEmpty: true},
    },
    description: DataTypes.STRING,
    userId: DataTypes.INTEGER,
  }, {});

  Todo.associate = ({User}) => {
    Todo.belongsTo(User, {as: 'user'});
  };

  return Todo;
};
