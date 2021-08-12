import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';

import Routes from './Routes';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;
