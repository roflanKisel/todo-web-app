const express = require('express');
const {User} = require('db/models');

const jwt = require('../../utils/jwt');
const authentication = require('./authentication');
const {authenticateUser} = require('../../middleware/auth');

const router = express.Router();

const getById = async (req, res, next) => {
  const {id} = req.params;

  try {
    const user = await User.findOne({where: {id}});

    return user
      ? res.status(200).json({userData: user.toJSON()})
      : res.status(400).json({message: `User with id ${id} does not exist`});
  } catch (err) {
    return next(err);
  }
};

const create = async (req, res, next) => {
  const {email, username, password} = req.body;

  try {
    const user = await User.findOne({where: {email}});

    if (user) {
      return res.status(400).json({
        message: 'User with this email already exists',
      });
    }

    // TODO: add password validation

    const createdUser = await User.create({email, username, password: User.generateHash(password)});

    return res.status(200).json({
      user: createdUser.toJSON(),
      token: jwt.sign(createdUser.toJSON()),
    });
  } catch (err) {
    return next(err);
  }
};

const deleteById = async (req, res, next) => {
  const {decodedUser} = req;
  const {id} = req.params;

  if (decodedUser.id !== id) {
    return res.status(400).json({
      message: 'You don\'t have enough permissions',
    });
  }

  try {
    const user = await User.findOne({where: {id}});

    if (!user) {
      return res.status(400).json({
        message: `User with id ${id} does not exist`,
      });
    }

    await user.destroy();
    return res.status(200);
  } catch (err) {
    return next(err);
  }
};

router.use(authentication);
router.get('/:id', authenticateUser, getById);
router.post('/create', create);
router.delete('/delete/:id', authenticateUser, deleteById);

module.exports = router;
