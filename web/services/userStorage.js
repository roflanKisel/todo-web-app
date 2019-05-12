import _localStorage from './localStorage';

const key = 'user-info';

const {clear} = _localStorage;
const get = () => _localStorage.get(key);
const set = (value) => _localStorage.set(key, value);
const remove = () => _localStorage.remove(key);

export default {
  clear,
  get,
  set,
  remove,
};
