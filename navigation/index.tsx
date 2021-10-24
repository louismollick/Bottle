/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider } from "native-base";
import Home from '../screens/Home';
import Say from '../screens/Say';
import Listen from '../screens/Listen';
import ListenTagSelect from '../screens/ListenTagSelect';
import SayTagSelect from '../screens/SayTagSelect';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          <Stack.Screen name="Say" component={Say} options={{ headerShown: false }} />
          <Stack.Screen name="SayTagSelect" component={SayTagSelect} options={{ headerShown: false }} />
          <Stack.Screen name="ListenTagSelect" component={ListenTagSelect} options={{ headerShown: false }} />
          <Stack.Screen name="Listen" component={Listen} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}

// import {
//   Text,
//   Link,
//   HStack,
//   Center,
//   Heading,
//   Switch,
//   useColorMode,
//   extendTheme,
//   VStack,
//   Code
// } from 'native-base'

// import NativeBaseIcon from "../components/NativeBaseIcon";


// Define the config
// const config = {
//   useSystemColorMode: false,
//   initialColorMode: "dark",
// };

// extend the theme
// export const theme = extendTheme({ config });

/* <Center
            _dark={{ bg: "blueGray.900" }}
            _light={{ bg: "blueGray.50" }}
            px={4}
            flex={1}
          >
            <VStack space={5} alignItems="center">
              <NativeBaseIcon />
              <Heading size="lg">Welcome to NativeBase</Heading>
              <HStack space={2} alignItems="center">
                <Text>Edit</Text>
                <Code>App.tsx</Code>
                <Text>and save to reload.</Text>
              </HStack>
              <Link href="https://docs.nativebase.io" isExternal>
                <Text color="primary.500" underline fontSize={"xl"}>
                  Learn NativeBase
                </Text>
              </Link>
              <ToggleDarkMode />
            </VStack>
          </Center> */

          // Color Switch Component
// function ToggleDarkMode() {
//   const { colorMode, toggleColorMode } = useColorMode();
//   return (
//     <HStack space={2} alignItems="center">
//       <Text>Dark</Text>
//       <Switch
//         isChecked={colorMode === "light" ? true : false}
//         onToggle={toggleColorMode}
//         aria-label={
//           colorMode === "light" ? "switch to dark mode" : "switch to light mode"
//         }
//       />
//       <Text>Light</Text>
//     </HStack>
//   );
// }