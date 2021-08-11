import React from 'react';
import { useSelector } from 'react-redux';

import { usuario } from '../store/selectors';
import LoginRoutes from './login.routes';

import { View, Text } from 'react-native';

const Routes = () => {
  const dadosUsuario = useSelector(store => store);

  console.log(dadosUsuario)

  // if (dadosUsuario.logged) {
  //   return (
  //     <View>
  //       <Text>HJhjhjhjh</Text>
  //     </View>
  //   );
  //}
  return <LoginRoutes />;
};

export default Routes;
