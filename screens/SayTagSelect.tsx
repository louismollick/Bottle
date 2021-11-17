import React, { useState } from 'react';
import { Center, Heading, FormControl, Checkbox, VStack, HStack, WarningOutlineIcon } from 'native-base';
import Constants from 'expo-constants';
import { MaterialCommunityIcons } from "@expo/vector-icons"
import IconButton from '../components/IconButton';

export default function SayTagSelect({ navigation }: { navigation: any }) {
  const [tags, setTags] = useState<string[]>([]);
  const [error, setError] = useState(false);

  return (
    <Center flex={1} px="5" py={Constants.statusBarHeight}>
      <VStack w="100%" h="100%" alignItems="center" justifyContent="space-between">
        <HStack w="100%" justifyContent="space-between" mt="5">
          <IconButton onPress={() => navigation.navigate('Home')}
            iconLibrary={MaterialCommunityIcons} iconName="home">
            {"Home"}
          </IconButton>
        </HStack>
        <FormControl isInvalid={error} >
          <Heading fontSize="3xl" textAlign="center">
            {"Select some tags for your bottle"}
          </Heading>
          <Checkbox.Group
            accessibilityLabel="pick a tag"
            mt={5}
            mx={10}
            p={5}
            borderWidth={1}
            borderRadius={30}
            onChange={(values) => {
              setTags(values || []);
              if (values.length > 0)
                setError(false);
            }}
          >
            <Checkbox value="Happy" my="3">
              Happy
            </Checkbox>
            <Checkbox value="Silly" my="3">
              Silly
            </Checkbox>
            <Checkbox value="Bored" my="3">
              Bored
            </Checkbox>
            <Checkbox value="Angry" my="3">
              Angry
            </Checkbox>
            <Checkbox value="Sad" my="3">
              Sad
            </Checkbox>
            <Checkbox value="Anxious" my="3">
              Anxious
            </Checkbox>
            <Checkbox value="Scared" my="3">
              Scared
            </Checkbox>
          </Checkbox.Group>
          {error && <FormControl.ErrorMessage _text={{ fontSize: 18 }} alignItems="center" leftIcon={<WarningOutlineIcon size="xs" />}>
            {"You must select at least one tag."}
          </FormControl.ErrorMessage>}
        </FormControl>
        <HStack w="100%" justifyContent="space-between">
          <IconButton onPress={() => navigation.goBack()}
            iconLibrary={MaterialCommunityIcons} iconName="arrow-left-bold">
            {"Back"}
          </IconButton>
          <IconButton onPress={() => navigation.navigate('Home')} isDisabled={tags.length <= 0}
            iconLibrary={MaterialCommunityIcons} iconName="send">
            {"Send Bottle!"}
          </IconButton>
        </HStack>
      </VStack>
    </Center>
  );
}