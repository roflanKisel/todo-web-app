const express = require('express');
const {Todo} = require('db/models');

const {authenticateUser} = require('../../middleware/auth');

const router = express.Router();

const getById = async (req, res, next) => {
  const {decodedUser} = req;
  const {id} = req.params;

  try {
    const todo = await Todo.findOne({
      where: {id, userId: decodedUser.id},
    });

    if (!todo) {
      return res.status(400).json({
        message: `Todo with id(${id}) was not found`,
      });
    }

    return res.status(200).json({todo});
  } catch (err) {
    return next(err);
  }
};

const getAll = async (req, res, next) => {
  const {decodedUser} = req;

  try {
    const todos = await Todo.findAll({
      where: {
        userId: decodedUser.id,
      },
    });

    if (!todos) {
      return res.status(400).json({
        message: `Todos for user ${decodedUser.username} were not found`,
      });
    }

    return res.status(200).json({todos});
  } catch (err) {
    return next(err);
  }
};

const create = async (req, res, next) => {
  const {decodedUser} = req;
  const {title, description} = req.body;

  try {
    const todo = await Todo.create({title, description, userId: decodedUser.id});

    return res.status(200).json({todo});
  } catch (err) {
    return next(err);
  }
};

const deleteById = async (req, res, next) => {
  const {decodedUser} = req;
  const {title, description} = req.body;
  const {id} = req.params;

  try {
    const todo = Todo.findOne({
      where: {
        id,
        userId: decodedUser.id,
        title,
        description,
      },
    });

    if (!todo) {
      return res.status(400).json({
        message: `Todo with id ${id} was not found`,
      });
    }

    await todo.destroy();

    return res.status(200);
  } catch (err) {
    return next(err);
  }
};

router.get('/', authenticateUser, getAll);
router.get('/:id', authenticateUser, getById);
router.post('/create', authenticateUser, create);
router.delete('/delete/:id', authenticateUser, deleteById);

module.exports = router;
