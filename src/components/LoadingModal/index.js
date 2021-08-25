import React from 'react';
import { View, Modal, Text, ActivityIndicator } from 'react-native';

const LoadingModal = ({ isLoading }) => {
  return (
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
  );
};

export default LoadingModal;
