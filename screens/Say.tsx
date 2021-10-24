import * as React from 'react';
import { Center, Heading, Button } from 'native-base';

export default function Say({ navigation }: { navigation: any }) {
  return (
    <Center flex={1}>
      <Heading>Say</Heading>
      <Button onPress={() => navigation.goBack()}>Back</Button>
      <Button onPress={() => console.log("Start Recording now")}>Start Recording</Button>
      {/* Here we need to update the buttons w/ the playback, redo, cancel, and next buttons once recording is done */}
    </Center>
  );
}