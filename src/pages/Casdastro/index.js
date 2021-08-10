import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
// import { Container } from './styles';

const Casdastro = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: '#606060', flex: 1 }}>
      <StatusBar backgroundColor="#606060" />
      <View style={{ flex: 1, justifyContent: 'flex-end' }}>
        <Text style={{ fontSize: 40, textAlign: 'center', color: '#dadada' }}>
          App{'\n'}Logo
        </Text>
      </View>
      <View style={{ flex: 3, paddingHorizontal: 40, paddingTop: 40 }}>
        <TextInput
          style={{
            backgroundColor: '#dadada',
            color: '#606060',
            fontSize: 20,
            paddingLeft: 10,
            marginBottom: 20,
            borderRadius: 5,
          }}
          placeholder="Nome"
          placeholderTextColor="rgba(0,0,0, 0.7)"
        />
        <TextInput
          style={{
            backgroundColor: '#dadada',
            color: '#606060',
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
            backgroundColor: '#dadada',
            color: '#606060',
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
          style={{
            paddingVertical: 15,
            backgroundColor: '#dadada',
            alignItems: 'center',
            borderRadius: 50,
            marginBottom: 20,
          }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Cadastrar-se</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={navigation.goBack}
        style={{
          position: 'absolute',
          top: 15,
          left: 15,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Icon name="chevron-left" size={30} color="#FFF" />
        <Text style={{ color: '#fff', fontSize: 15 }}>Volar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Casdastro;
