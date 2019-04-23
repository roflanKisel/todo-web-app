const jwt = require('../utils/jwt');

const authenticateUser = async (req, res, next) => {
  const token = req.headers['x-user-token'];

  try {
    const decodedUser = await jwt.verify(token);

    req.decodedUser = decodedUser;
  } catch (err) {
    return res.status(400).json({message: 'Token is not verified'});
  }

  return next();
};

module.exports = {
  authenticateUser,
};
