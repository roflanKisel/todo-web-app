const prefix = 'twa';

const clear = () => localStorage.clear();
const get = (key) => JSON.parse(localStorage.getItem(`${prefix}-${key}`));
const set = (key, value) => localStorage.setItem(`${prefix}-${key}`, JSON.stringify(value));
const remove = (key) => localStorage.removeItem(`${prefix}-${key}`);

export default {
  clear,
  get,
  set,
  remove,
};
