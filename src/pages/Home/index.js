import React from 'react';
import { View, Text, StatusBar, TouchableOpacity, Alert } from 'react-native';
import { useDispatch } from 'react-redux';

import { logout } from '../../store/actions';

const Home = () => {
  const dispatch = useDispatch();

  function handleLogout() {
    console.log(logout)
    dispatch(logout({}))
    // Alert.alert('Logout', 'Deseja sair da sua conta?', [
    //   { text: 'Não' },
    //   { text: 'Sim', onPress: () => dispatch(logout({})) },
    // ]);
  }
  return (
    <View style={{ flex: 1, backgroundColor: '#1F2421', justifyContent: 'center', paddingHorizontal: 40 }}>
      <StatusBar backgroundColor="#1F2421" />
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
        style={{
          backgroundColor: '#dce1de',
          paddingVertical: 15,
          borderRadius: 50,
          alignItems: 'center',
        }}>
        <Text style={{ fontSize: 20 }}>Flatlist</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
