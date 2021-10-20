/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';
import Say from '../screens/Say';
import Listen from '../screens/Listen';
import ListenTagSelect from '../screens/ListenTagSelect';
import SayTagSelect from '../screens/SayTagSelect';

const Stack = createNativeStackNavigator();

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Say" component={Say} options={{ headerShown: false }} />
        <Stack.Screen name="SayTagSelect" component={SayTagSelect} options={{ headerShown: false }} />
        <Stack.Screen name="ListenTagSelect" component={ListenTagSelect} options={{ headerShown: false }} />
        <Stack.Screen name="Listen" component={Listen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}