const express = require('express');
const {User} = require('db/models');
const atob = require('atob');

const jwt = require('../../utils/jwt');

const router = express.Router();

const authenticate = async (req, res, next) => {
  const auth = req.headers.authorization && req.headers.authorization.split(' ');

  if (!auth) {
    return res.status(400).json({
      message: 'Missing authorization header',
    });
  }

  try {
    const [email, password] = auth[auth.length - 1].split(':').map(atob);

    const user = await User.findOne({where: {email}});

    if (!user) {
      return res.status(400).json({
        message: 'Invalid email',
      });
    }

    const isPasswordValid = user.validatePassword(password);

    return isPasswordValid
      ? res.status(200).json({user: user.toJSON(), token: jwt.sign(user.toJSON())})
      : res.status(400).json({message: 'Invalid password'});
  } catch (err) {
    return next(err);
  }
};

router.post('/authenticate', authenticate);

module.exports = router;
