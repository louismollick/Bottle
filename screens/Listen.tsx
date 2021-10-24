import * as React from 'react';
import { Center, Heading, Button } from 'native-base';

export default function Listen({ navigation }: { navigation: any }) {
  return (
    <Center flex={1}>
      <Heading>Listen</Heading>
      <Button onPress={() => navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      })}>Home</Button>
      <Button onPress={() => navigation.goBack()}>Back</Button>
      <Button onPress={() => console.log("Play/Pause")}>Play/Pause</Button>
      <Button onPress={() => console.log("Update bottle state with new bottle")}>Next Bottle</Button>
    </Center>
  );
}