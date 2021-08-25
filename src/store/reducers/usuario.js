import { LOGIN, LOGOUT } from '../actionTypes';

const initialState = {
  id: 0,
  nome: '',
  email: '',
  logged: false,
};

export default usuario = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        id: action.payload.id,
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
