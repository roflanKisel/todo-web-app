module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define('Todo', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {notEmpty: true},
    },
    description: DataTypes.STRING,
  }, {});

  Todo.associate = ({User}) => {
    Todo.belongsTo(User);
  };

  return Todo;
};
