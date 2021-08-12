import React from 'react';
import { useSelector } from 'react-redux';

import { usuario } from '../store/selectors';
import LoginRoutes from './login.routes';
import Home from '../pages/Home'

const Routes = () => {
  const dadosUsuario = useSelector(usuario);

  if (dadosUsuario.logged) {
    return (
      <Home />
    );
  }

  return <LoginRoutes />;
};

export default Routes;
