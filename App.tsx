import React from 'react';
import './src/utils/window';
import { Home } from './src/pages/Home';
import { Room } from './src/pages/Room';
import { SelectRoom } from './src/pages/SelectRoom';
import { ThemeProvider } from 'styled-components';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import theme from './src/global/styles/theme';

const Stack = createStackNavigator();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
            headerShown: false,
          }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Room" component={Room} />
            <Stack.Screen name="SelectRoom" component={SelectRoom} />
          </Stack.Navigator>
        </NavigationContainer>
    </ThemeProvider>
  );
}
