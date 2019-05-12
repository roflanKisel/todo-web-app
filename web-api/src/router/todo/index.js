const express = require('express');
const {Todo} = require('db/models');

const {authenticateUser} = require('../../middlewares/auth');

const router = express.Router();

router.get('/:id', authenticateUser, async (req, res) => {
  const {decodedUser} = req;
  const {id} = req.params;

  try {
    const todo = await Todo.findOne({
      where: {
        id,
        userId: decodedUser.id,
      },
    });

    if (!todo) {
      return res.status(400).json({
        message: `Todo with id(${id}) was not found`,
      });
    }

    return res.status(200).json({todo});
  } catch (err) {
    return res.status(500).json({
      message: 'Something went wrong',
    });
  }
});

router.get('/', authenticateUser, async (req, res) => {
  const {decodedUser} = req;

  try {
    const todos = await Todo.findAll({
      where: {
        userId: decodedUser.id,
      },
    });

    if (!todos) {
      return res.status(400).json({
        message: `Todos for user(${decodedUser.username}) were not found`,
      });
    }

    return res.status(200).json({todos});
  } catch (err) {
    return res.status(500).json({
      message: 'Something went wrong',
    });
  }
});

router.post('/create', authenticateUser, async (req, res) => {
  const {decodedUser} = req;
  const {title, description} = req.body;

  try {
    const todo = await Todo.create({title, description, userId: decodedUser.id});

    return res.status(200).json({todo});
  } catch (err) {
    return res.status(500).json({
      message: 'Something went wrong',
    });
  }
});

router.delete('/delete/:id', authenticateUser, async (req, res) => {
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
        message: `Todo with id(${id}) was not found`,
      });
    }

    await todo.destroy();

    return res.status(200);
  } catch (err) {
    return res.status(500).json({
      message: 'Something went wrong',
    });
  }
});

module.exports = router;
