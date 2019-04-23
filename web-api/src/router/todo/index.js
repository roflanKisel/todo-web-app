const express = require('express');

const {authenticateUser} = require('../../middlewares/auth');

const router = express.Router();

router.get('/:id', authenticateUser, (req, res) => {
  const {decodedUser} = req;

  return res.status(200).json({
    user: decodedUser,
  });
});

module.exports = router;
