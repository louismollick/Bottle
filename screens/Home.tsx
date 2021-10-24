import * as React from 'react';
import { Heading, Button, Center } from 'native-base';

export default function Home({ navigation }: { navigation: any }) {
  return (
    <Center flex={1}>
      <Heading>Home</Heading>
      <Button onPress={() => navigation.navigate('Say')}>I want to send out a bottle</Button>
      <Button onPress={() => navigation.navigate('ListenTagSelect')}>I want to pick up a bottle</Button>
    </Center>
  );
}
