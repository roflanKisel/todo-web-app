const express = require('express');
const {User} = require('db/models');

const log = require('../../utils/log');

const router = express.Router();

router.post('/authenticate', async (req, res) => {
  const {email, password} = req.body;

  try {
    const user = await User.findOne({where: {email}});

    if (!user) {
      return res.status(400).json({
        message: 'Invalid email',
      });
    }

    const isPasswordValid = user.validatePassword(password);

    return isPasswordValid
      ? res.status(200).json({userData: user.toJSON()})
      : res.status(400).json({message: 'Invalid password'});
  } catch (err) {
    log.error('Unexpected error');

    return res.status(500).json({
      message: 'Something went wrong',
    });
  }
});

module.exports = router;
