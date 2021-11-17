import React, { useState } from 'react';
import { Checkbox, Center, Heading, VStack, HStack, FormControl, WarningOutlineIcon } from 'native-base';
import { MaterialCommunityIcons } from "@expo/vector-icons"
import IconButton from '../components/IconButton';
import Constants from 'expo-constants';

export default function ListenTagSelect({ navigation }: { navigation: any }) {
  const [tags, setTags] = useState<string[]>([]);
  const [error, setError] = useState(false);

  const onNextPressed = () => {
    if (tags.length > 0) {
      navigation.navigate('Listen', tags);
    } else {
      setError(true);
    }
  };

  return (
    <Center flex={1} px="5" py={Constants.statusBarHeight}>
      <VStack w="100%" h="100%" alignItems="center" justifyContent="flex-end">
        <FormControl isInvalid={error} mb={10}>
          <Heading fontSize="3xl" textAlign="center">
            {"What kind of Bottle would you like to open?"}
          </Heading>
          <Checkbox.Group
            accessibilityLabel="pick a tag"
            mx={10}
            mt={5}
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
          {error && <FormControl.ErrorMessage _text={{ fontSize: 18 }} alignItems="center" leftIcon={<WarningOutlineIcon size="sm" />}>
            {"You must select at least one tag."}
          </FormControl.ErrorMessage>}
        </FormControl>
        <HStack w="100%" justifyContent="space-between">
          <IconButton onPress={() => navigation.goBack()}
            iconLibrary={MaterialCommunityIcons} iconName="arrow-left-bold">
            {"Back"}
          </IconButton>
          <IconButton onPress={onNextPressed}
            iconLibrary={MaterialCommunityIcons} iconName="arrow-right-bold">
            {"Listen"}
          </IconButton>
        </HStack>
      </VStack>
    </Center>
  );
}