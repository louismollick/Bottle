import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { extendTheme, NativeBaseProvider } from "native-base";
import Home from '../screens/Home';
import Say from '../screens/Say';
import Listen from '../screens/Listen';
import ListenTagSelect from '../screens/ListenTagSelect';
import SayTagSelect from '../screens/SayTagSelect';

const Stack = createNativeStackNavigator();

const theme = extendTheme({
  components: {
    Button: {
      defaultProps: {
        _text: {
          fontSize: 20,
          textAlign: "center",
          color: "coolGray.700",
          fontWeight: "medium",
        }
      },
    },
    Checkbox: {
      defaultProps: {
        _text: {
          fontSize: 20,
          textAlign: "center",
          color: "coolGray.800",
          fontWeight: "medium",
        }
      },
    },
  }
});

export default function Navigation() {
  return (
    <NavigationContainer>
      <NativeBaseProvider theme={theme}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          <Stack.Screen name="Say" component={Say} options={{ headerShown: false }} />
          <Stack.Screen name="SayTagSelect" component={SayTagSelect} options={{ headerShown: false }} />
          <Stack.Screen name="ListenTagSelect" component={ListenTagSelect} options={{ headerShown: false }} />
          <Stack.Screen name="Listen" component={Listen} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NativeBaseProvider>
    </NavigationContainer >
  );
}