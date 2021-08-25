import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Alert,
  Modal,
  ActivityIndicator,
} from 'react-native';
import { useDispatch } from 'react-redux';

import api from '../../services/api';
import { login } from '../../store/actions';

const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  async function loging() {
    setIsLoading(true);
    try {
      const { data } = await api.post('/login', {
        email: email,
        senha: senha,
      });

      dispatch(login(data));
    } catch (e) {
      setIsLoading(false);
      Alert.alert('Erro', 'Usuário ou Email inválidos');
    }
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#1F2421' }}>
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
          onChangeText={setEmail}
          placeholderTextColor="rgba(0,0,0, 0.7)"
          autoCapitalize='none'
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
          onChangeText={setSenha}
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
      <Modal transparent={true} visible={isLoading}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.7)',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: '#fff',
              flexDirection: 'row',
              alignItems: 'center',
              padding: 15,
              borderRadius: 20,
            }}>
            <ActivityIndicator color="#000" size="large" />
            <Text style={{ marginLeft: 10 }}>Carregando..</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Login;
