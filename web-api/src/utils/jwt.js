const jwt = require('jsonwebtoken');

const userSecret = process.env.JWT_USER_SECRET || 'SECRET_KEY';

const sign = (data) => jwt.sign(data, userSecret);

const verify = (token) => new Promise((resolve, reject) => {
  jwt.verify(token, userSecret, (err, decoded) => (err && reject(err)) || resolve(decoded));
});

module.exports = {
  sign,
  verify,
};
