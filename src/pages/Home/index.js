import React from 'react';
import { View, Text, StatusBar, TouchableOpacity, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { logout } from '../../store/actions';
import { usuario } from '../../store/selectors';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const dadosUsuario = useSelector(usuario);

  function handleLogout() {
    Alert.alert('Logout', 'Deseja sair da sua conta?', [
      { text: 'Não' },
      { text: 'Sim', onPress: () => dispatch(logout({})) },
    ]);
  }
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#1F2421',
        justifyContent: 'space-evenly',
        paddingHorizontal: 40,
      }}>
      <StatusBar backgroundColor="#1F2421" />
      <Text style={{ fontSize: 30, color: '#fff', textAlign: 'center' }}>
        Bem-Vindo{'\n'}
        {dadosUsuario.nome}
      </Text>
      <View>
        <TouchableOpacity
          onPress={handleLogout}
          style={{
            backgroundColor: '#dce1de',
            paddingVertical: 15,
            borderRadius: 50,
            alignItems: 'center',
            marginBottom: 20,
          }}>
          <Text style={{ fontSize: 20 }}>Sair</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Flatlist')}
          style={{
            backgroundColor: '#dce1de',
            paddingVertical: 15,
            borderRadius: 50,
            alignItems: 'center',
          }}>
          <Text style={{ fontSize: 20 }}>Flatlist</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
