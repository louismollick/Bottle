import * as React from 'react';
import { Heading, Button, Center, HStack } from 'native-base';

export default function Home({ navigation }: { navigation: any }) {
  return (
    <Center flex={1} px={3} justifyContent="center" alignItems="center">
      <Heading fontSize="5xl" textAlign="center" mb="20">Bottle</Heading>
      <HStack w="100%" space={5} justifyContent="center">
        <Button onPress={() => navigation.navigate('Say')}
          w="150" h="125" _text={{ textAlign: "center" }}>
          {"I want to send out a bottle"}
        </Button>
        <Button onPress={() => navigation.navigate('ListenTagSelect')}
          w="150" h="125" _text={{ textAlign: "center" }} mt="auto">
          {"I want to pick up a bottle"}
        </Button>
      </HStack>
    </Center>
  );
}
