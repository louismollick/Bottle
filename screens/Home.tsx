import React, { useState, useRef, useCallback } from 'react';
import { Icon, Heading, Button, Center, HStack, AlertDialog } from 'native-base';
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { useFocusEffect } from '@react-navigation/native';

export default function Home({ route, navigation }: { route: any, navigation: any }) {
  const [isSentConfirmationOpen, setIsSentConfirmationOpen] = useState(false);
  const onCloseConfirmation = () => setIsSentConfirmationOpen(false);
  const cancelRef = useRef(null);

  useFocusEffect(useCallback(() => {
    if (route?.params?.bottleSent) {
      console.log("Resetting params...")
      setIsSentConfirmationOpen(true);
      navigation.setParams({ bottleSent: false });
    }
  }, [route]));

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
      <AlertDialog
        leastDestructiveRef={cancelRef}
        isOpen={isSentConfirmationOpen}
        onClose={onCloseConfirmation}
      >
        <AlertDialog.Content>
          {/* <AlertDialog.CloseButton /> */}
          <AlertDialog.Header alignItems="center">
            <Icon as={MaterialCommunityIcons} name="send" color="coolGray.800" alignSelf="center" />
            Bottle Sent!
          </AlertDialog.Header>
          <AlertDialog.Footer>
            <Button onPress={onCloseConfirmation} ref={cancelRef} flex="1">
              {"OK"}
            </Button>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
    </Center>
  );
}
