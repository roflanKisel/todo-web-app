import validator from 'validator';

const email = validator.isEmail;

const password = (value) => !validator.isEmpty(value) && value.length >= 8 && !containsAny(value, '/\\"\'`;&$#'.split(''));
const username = (value) => !validator.isEmpty(value) && value.length >= 5 && !containsAny(value, '/\\"\'`;&$#'.split(''));

const containsAny = (str, seeds) => seeds
  .map((seed) => validator.contains(str, seed))
  .includes(true);

export default {
  email,
  password,
  username,
};
