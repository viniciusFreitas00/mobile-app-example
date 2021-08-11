import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { login } from '../../store/actions';

// import styles from './styles';

const Login = ({ navigation }) => {
  const dispatch = useDispatch();

  function loging() {
    dispatch(login({ nome: 'nome', email: 'email' }));
  }

  return (
    <View style={{ backgroundColor: '#1F2421', flex: 1 }}>
      <StatusBar backgroundColor="#1F2421" />
      <View style={{ flex: 1, justifyContent: 'flex-end' }}>
        <Text style={{ fontSize: 40, textAlign: 'center', color: '#dadada' }}>
          App{'\n'}Logo
        </Text>
      </View>
      <View
        style={{ flex: 3, paddingHorizontal: 40, justifyContent: 'center' }}>
        <TextInput
          style={{
            backgroundColor: '#dce1de',
            color: '#1F2421',
            fontSize: 20,
            paddingLeft: 10,
            marginBottom: 20,
            borderRadius: 5,
          }}
          placeholder="Email"
          placeholderTextColor="rgba(0,0,0, 0.7)"
        />
        <TextInput
          style={{
            backgroundColor: '#dce1de',
            color: '#1F2421',
            fontSize: 20,
            paddingLeft: 10,
            marginBottom: 20,
            borderRadius: 5,
          }}
          placeholder="Senha"
          secureTextEntry={true}
          placeholderTextColor="rgba(0,0,0, 0.7)"
        />
        <TouchableOpacity
          onPress={loging}
          style={{
            paddingVertical: 15,
            backgroundColor: '#dce1de',
            alignItems: 'center',
            borderRadius: 50,
            marginBottom: 20,
          }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Cadastro')}
          style={{
            paddingVertical: 15,
            borderColor: '#dce1de',
            borderWidth: 2,
            alignItems: 'center',
            borderRadius: 50,
            marginBottom: 20,
          }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#dadada' }}>
            Cadastrar-se
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
