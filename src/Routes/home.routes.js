import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../pages/Home';
import FlatlistExample from '../pages/Flatlist'

const Stack = createNativeStackNavigator();

const HomeRoutes = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Flatlist" component={FlatlistExample} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default HomeRoutes;
