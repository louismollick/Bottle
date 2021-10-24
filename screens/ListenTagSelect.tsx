import React, { useState } from 'react';
import { Checkbox, Heading, Center, Button, HStack, Container } from 'native-base';

export default function ListenTagSelect({ navigation }: { navigation: any }) {
  const [tags, setTags] = useState<string[]>([]);

  return (
    <Center flex={1}>
      <Heading>What kind of bottle would you like to open?</Heading>
      <Checkbox.Group
        colorScheme="green"
        accessibilityLabel="pick an item"
        onChange={(values) => {
          setTags(tags || [])
        }}
      >
        <Checkbox value="Happy" my="1">
          Happy
        </Checkbox>
        <Checkbox value="Silly" my="1">
          Silly
        </Checkbox>
        <Checkbox value="Bored" my="1">
          Bored
        </Checkbox>
        <Checkbox value="Angry" my="1">
          Angry
        </Checkbox>
        <Checkbox value="Sad" my="1">
          Sad
        </Checkbox>
        <Checkbox value="Anxious" my="1">
          Anxious
        </Checkbox>
        <Checkbox value="Scared" my="1">
          Scared
        </Checkbox>
      </Checkbox.Group>
      <HStack w="100%" space={3} alignItems="center" justifyContent="space-around" >
        <Button onPress={() => navigation.goBack()}>Back</Button>
        <Button onPress={() => navigation.navigate('Listen')}>Next</Button>
      </HStack>
    </Center>
  );
}