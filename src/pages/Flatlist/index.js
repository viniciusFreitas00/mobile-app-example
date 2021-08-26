import React, { useState, useEffect } from 'react';
import { View, FlatList, Alert, Text } from 'react-native';

import api from '../../services/api';

const FlatlistExample = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [flatlistData, setFlatlistData] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    setIsLoading(true);
    try {
      const { data } = await api.get('/user');

      setFlatlistData(data);
    } catch (error) {
      Alert.alert('Erro', 'Ocorreu um erro, tente novamente mais tarde.');
    }
    setIsLoading(false);
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#1F2421',
        justifyContent: 'space-evenly',
      }}>
      <FlatList
        refreshing={isLoading}
        onRefresh={getUsers}
        data={flatlistData}
        renderItem={({ item, index }) => (
          <View
            style={{
              marginTop: 25,
              backgroundColor: '#fff',
              padding: 10,
              marginHorizontal: 40,
            }}>
            <Text style={{ color: '#000' }}>Nome: {item.nome}</Text>
            <Text style={{ color: '#000' }}>Email: {item.email}</Text>
            <Text style={{ color: '#000' }}>Data: {item.data_cadastro}</Text>
          </View>
        )}
        keyExtractor={item => item.email}
      />
    </View>
  );
};

export default FlatlistExample;
