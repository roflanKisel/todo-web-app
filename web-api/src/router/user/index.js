const express = require('express');
const {User} = require('db/models');

const log = require('../../utils/log');
const jwt = require('../../utils/jwt');
const authentication = require('./authentication');

const router = express.Router();

router.use(authentication);

router.get('/:id', async (req, res) => {
  const {id} = req.params;

  try {
    const user = await User.findOne({where: {id}});

    return user
      ? res.status(200).json({userData: user.toJSON()})
      : res.status(400).json({message: `User with id ${id} does not exist`});
  } catch (err) {
    log.error('Unexpected error getting user');

    return res.status(500).json({
      message: 'Something went wrong',
    });
  }
});

router.post('/create', async (req, res) => {
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
    log.error('Unexpected error creating user');

    return res.status(500).json({
      message: 'Something went wrong',
    });
  }
});

module.exports = router;
