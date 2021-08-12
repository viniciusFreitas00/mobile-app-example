import { LOGIN, LOGOUT } from '../actionTypes';

const initialState = {
  nome: '',
  email: '',
  logged: false,
};

export default usuario = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        nome: action.payload.nome,
        email: action.payload.email,
        logged: true,
      };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};
