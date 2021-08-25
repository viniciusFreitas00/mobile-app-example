import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import styles from './styles';
import api from '../../services/api';
import LoadingModal from '../../components/LoadingModal';

const Casdastro = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [validaSenha, setValidaSenha] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const validaInformacoes = () => {
    if (nome.trim() == '') {
      Alert.alert('Erro', 'Nome inválido.');
    } else if (email.trim() == '') {
      Alert.alert('Erro', 'Email inválido.');
    } else if (senha.trim() == '') {
      Alert.alert('Erro', 'Senha inválida.');
    } else if (senha != validaSenha) {
      Alert.alert('Erro', 'Senhas não conferem.');
    } else {
      cadastrarUsuario();
    }
  };

  const cadastrarUsuario = async () => {
    setIsLoading(true);
    try {
      const { data } = await api.post('/user', {
        nome: nome,
        email: email,
        senha: senha,
      });

      Alert.alert(
        'Sucesso',
        'Usuário cadastrado com sucesso, faça o seu primeiro login.',
        [{ text: 'Ok', onPress: () => navigation.goBack() }],
      );
    } catch (error) {
      if (error?.response?.status == 400) {
        Alert.alert('Erro', error?.response.data.message);
      } else {
        Alert.alert('Erro', 'Ocorreu um erro, tente novamente mais tarde.');
      }
    }
    setIsLoading(false);
  };

  return (
    <View style={styles.Container}>
      <StatusBar backgroundColor="#1F2421" />
      <View style={styles.LogoContainer}>
        <Text style={{ fontSize: 40, textAlign: 'center', color: '#dadada' }}>
          App{'\n'}Logo
        </Text>
      </View>
      <View style={styles.Body}>
        <TextInput
          style={styles.Input}
          placeholder="Nome"
          placeholderTextColor="rgba(0,0,0, 0.7)"
          onChangeText={setNome}
          autoCapitalize="words"
        />
        <TextInput
          style={styles.Input}
          placeholder="Email"
          placeholderTextColor="rgba(0,0,0, 0.7)"
          onChangeText={setEmail}
          autoCapitalize="none"
          />
        <TextInput
          style={styles.Input}
          placeholder="Senha"
          secureTextEntry={true}
          placeholderTextColor="rgba(0,0,0, 0.7)"
          onChangeText={setSenha}
          autoCapitalize="none"
          />
        <TextInput
          style={styles.Input}
          placeholder="Confirma Senha"
          secureTextEntry={true}
          placeholderTextColor="rgba(0,0,0, 0.7)"
          onChangeText={setValidaSenha}
          autoCapitalize="none"
        />
        <TouchableOpacity style={styles.Button} onPress={validaInformacoes}>
          <Text style={styles.ButtonText}>Cadastrar-se</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={navigation.goBack} style={styles.goBackButton}>
        <Icon name="chevron-left" size={30} color="#dce1de" />
        <Text style={styles.goBackButtonText}>Volar</Text>
      </TouchableOpacity>
      <LoadingModal isLoading={isLoading} />
    </View>
  );
};

export default Casdastro;
