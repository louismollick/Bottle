import React, { useState } from 'react';
import { Center, HStack } from 'native-base';
import Constants from 'expo-constants';
import { MaterialCommunityIcons } from "@expo/vector-icons"
import IconButton from '../components/IconButton';
import TagSelect from '../components/TagSelect';


export default function SayTagSelect({ navigation }: { navigation: any }) {
  const [tags, setTags] = useState<string[]>([]);
  const [error, setError] = useState(false);

  const onNextPressed = () => {
    if (tags.length > 0) navigation.navigate('Listen', tags);
    else setError(true);
  };

  const onSendBottle = () => {
    if (tags.length > 0)
      navigation.reset({
        index: 0,
        routes: [
          { name: 'Home', params: { bottleSent: true } }]
      });
    else setError(true);
  }

  return (
    <Center flex={1} px="5" py={Constants.statusBarHeight} alignItems="center" justifyContent="flex-end" bg="#fff8d2">
      <HStack w="100%" justifyContent="space-between" alignSelf="flex-start">
        <IconButton onPress={() => navigation.navigate('Home')}
          iconLibrary={MaterialCommunityIcons} iconName="home">
          {"Home"}
        </IconButton>
      </HStack>
      <TagSelect setTags={setTags} error={error} setError={setError}>
        {"Select some tags for your bottle"}
      </TagSelect>
      <HStack w="100%" justifyContent="space-between">
        <IconButton onPress={() => navigation.goBack()}
          iconLibrary={MaterialCommunityIcons} iconName="arrow-left-bold">
          {"Back"}
        </IconButton>
        <IconButton onPress={onSendBottle} isDisabled={tags.length <= 0}
          iconLibrary={MaterialCommunityIcons} iconName="send">
          {"Send Bottle!"}
        </IconButton>
      </HStack>
    </Center >
  );
}