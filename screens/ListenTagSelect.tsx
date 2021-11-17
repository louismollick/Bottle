import React, { useState } from 'react';
import { Checkbox, Center, Heading, VStack, HStack, FormControl, WarningOutlineIcon } from 'native-base';
import { MaterialCommunityIcons } from "@expo/vector-icons"
import Constants from 'expo-constants';
import IconButton from '../components/IconButton';
import TagSelect from '../components/TagSelect';


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
        <TagSelect setTags={setTags} >
          {"What kind of Bottle would you like to open?"}
        </TagSelect>
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