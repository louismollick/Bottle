import React, { useState } from 'react';
import { Center, Heading, FormControl, Checkbox, VStack, HStack, WarningOutlineIcon, ScrollView, Box } from 'native-base';
import Constants from 'expo-constants';
import { MaterialCommunityIcons } from "@expo/vector-icons"
import IconButton from '../components/IconButton';
import TagSelect from '../components/TagSelect';


export default function SayTagSelect({ navigation }: { navigation: any }) {
  const [tags, setTags] = useState<string[]>([]);

  return (
    <Center flex={1} px="5" py={Constants.statusBarHeight} alignItems="center" justifyContent="flex-end">
      <HStack w="100%" justifyContent="space-between" alignSelf="flex-start">
        <IconButton onPress={() => navigation.navigate('Home')}
          iconLibrary={MaterialCommunityIcons} iconName="home">
          {"Home"}
        </IconButton>
      </HStack>
      <TagSelect setTags={setTags} >
        {"Select some tags for your bottle"}
      </TagSelect>
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
    </Center >
  );
}