import {useState} from 'react';
import userStorage from '../services/userStorage';

const useUser = () => {
  const [user, setUser] = useState(null);

  return [
    user,
    setUser,
    function removeUser() {
      userStorage.remove();
      setUser(null);
    },
  ];
};

/* eslint-disable import/prefer-default-export */
export {
  useUser,
};
