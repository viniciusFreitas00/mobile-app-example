import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import styles from './styles';

const Casdastro = ({ navigation }) => {
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
        />
        <TextInput
          style={styles.Input}
          placeholder="Email"
          placeholderTextColor="rgba(0,0,0, 0.7)"
        />
        <TextInput
          style={styles.Input}
          placeholder="Senha"
          secureTextEntry={true}
          placeholderTextColor="rgba(0,0,0, 0.7)"
        />
        <TextInput
          style={styles.Input}
          placeholder="Confirma Senha"
          secureTextEntry={true}
          placeholderTextColor="rgba(0,0,0, 0.7)"
        />
        <TouchableOpacity style={styles.Button}>
          <Text style={styles.ButtonText}>Cadastrar-se</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={navigation.goBack} style={styles.goBackButton}>
        <Icon name="chevron-left" size={30} color="#dce1de" />
        <Text style={styles.goBackButtonText}>Volar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Casdastro;
