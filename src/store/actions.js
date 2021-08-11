import { LOGIN, LOGOUT } from './actionTypes';

export const login = ({ nome, email }) => ({
  type: LOGIN,
  payload: {
    nome,
    email,
  },
});

export const logout = () => ({
  type: LOGOUT,
});
