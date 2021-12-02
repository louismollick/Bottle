import React, { useState, useRef, useCallback } from 'react';
import { Icon, Heading, Button, Center, HStack, AlertDialog, VStack } from 'native-base';
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { useFocusEffect } from '@react-navigation/native';
import FilledBottleIcon from '../components/FilledBottleIcon';
import EmptyBottleIcon from '../components/EmptyBottleIcon';
import { ImageBackground, Animated, StyleSheet, TouchableOpacity } from 'react-native';
import SCALE from '../animations/scale';

export default function Home({ route, navigation }: { route: any, navigation: any }) {
  const [isSentConfirmationOpen, setIsSentConfirmationOpen] = useState(false);
  const onCloseConfirmation = () => setIsSentConfirmationOpen(false);
  const cancelRef = useRef(null);
  const sendBottleAnimated = new Animated.Value(0);
  const pickupBottleAnimated = new Animated.Value(0);

  useFocusEffect(useCallback(() => {
    if (route?.params?.bottleSent) {
      console.log("Resetting params...")
      setIsSentConfirmationOpen(true);
      navigation.setParams({ bottleSent: false });
    }
  }, [route]));

  return (
    <ImageBackground source={require("../assets/images/beach.png")} resizeMode="cover" style={styles.image}>
      <Center flex={1} px={3} justifyContent="center" alignItems="center" bg="transparent">
        <Heading fontSize="5xl" textAlign="center" mb="20">Bottle</Heading>
        <HStack w="100%" space={5} justifyContent="center">
          <VStack alignItems="center">
            <TouchableOpacity
              onPress={() => { navigation.navigate('Say') }}
              onPressIn={() => { SCALE.pressInAnimation(sendBottleAnimated); }}
              onPressOut={() => { SCALE.pressOutAnimation(sendBottleAnimated); }}
              style={SCALE.getScaleTransformationStyle(sendBottleAnimated, 1, 0.95)}
              activeOpacity={0.8}
            >
              <Animated.View>
                <EmptyBottleIcon size="5xl" />
              </Animated.View>
            </TouchableOpacity>
            <Heading bold width="100" textAlign="center" fontSize="xl">{"I want to send out a bottle"}</Heading>
          </VStack>
          <VStack alignItems="center">
            <TouchableOpacity
              onPress={() => { navigation.navigate('ListenTagSelect') }}
              onPressIn={() => { SCALE.pressInAnimation(pickupBottleAnimated); }}
              onPressOut={() => { SCALE.pressOutAnimation(pickupBottleAnimated); }}
              style={SCALE.getScaleTransformationStyle(pickupBottleAnimated, 1, 0.95)}
              activeOpacity={0.8}
            >
              <Animated.View>
                <FilledBottleIcon size="5xl" />
              </Animated.View>
            </TouchableOpacity>
            <Heading bold width="100" textAlign="center" fontSize="xl">{"I want to pick up a bottle"}</Heading>
          </VStack>

        </HStack>
        <AlertDialog
          leastDestructiveRef={cancelRef}
          isOpen={isSentConfirmationOpen}
          onClose={onCloseConfirmation}
        >
          <AlertDialog.Content>
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
    </ImageBackground>

  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'center',
  }
});