import React from 'react';
import { useSelector } from 'react-redux';

import { usuario } from '../store/selectors';
import LoginRoutes from './login.routes';
import HomeRoutes from './home.routes'

const Routes = () => {
  const dadosUsuario = useSelector(usuario);

  if (dadosUsuario.logged) {
    return (
      <HomeRoutes />
    );
  }

  return <LoginRoutes />;
};

export default Routes;
