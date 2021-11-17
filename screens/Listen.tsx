import React, { useState, useCallback, useRef } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { Center, HStack, VStack } from 'native-base';
import { Audio, AVPlaybackStatus } from 'expo-av';
import { MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons"
import Constants from 'expo-constants';
import audioFiles from '../utils/audioFiles';
import IconButton from '../components/IconButton';

export default function Listen({ route, navigation }: { route: any, navigation: any }) {
  const index = useRef(0);
  const [replayable, setReplayable] = useState(false);
  const [playing, setPlaying] = useState(true);
  const [bottle, setBottle] = useState<Audio.Sound | undefined>(undefined);
  const audioPaths: string[] = route.params;

  useFocusEffect(
    useCallback(() => {
      if (!bottle) {
        Audio.setAudioModeAsync({
          allowsRecordingIOS: false,
          staysActiveInBackground: false,
          interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
          playsInSilentModeIOS: true,
          shouldDuckAndroid: true,
          interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
          playThroughEarpieceAndroid: false
        });
        loadBottle(); // plays bottle automatically
      }

      return bottle ? () => {
        console.log('Unloading Sound on Blur');
        bottle.unloadAsync();
      } : undefined;
    }, [bottle])
  );

  const loadBottle = async () => {
    if (bottle) {
      console.log('Unloading Sound on load');
      await bottle.unloadAsync();
    }
    console.log("New index: ", index.current);
    const { sound } = await Audio.Sound.createAsync(
      audioFiles[audioPaths[index.current]], // { uri: PLAYLIST[this.index].uri }; Use this once we put the audios on AWS
      { shouldPlay: true },
      onPlaybackStatusUpdate
    );
    setBottle(sound);
    setPlaying(true);
    console.log('Playing new bottle');
  }

  const onPlaybackStatusUpdate = (status: AVPlaybackStatus) => {
    if (status.isLoaded) {
      console.log("playbackStatusUpdate", status.didJustFinish)
      if (status.didJustFinish) setReplayable(true);
    } else if (status.error)
      console.log(`FATAL PLAYER ERROR: ${status.error}`);
  };

  const onNextBottlePressed = () => {
    console.log("nextBottle");
    if (index.current >= audioPaths.length - 1) return;
    index.current++;
    loadBottle();
  };

  const onPrevBottlePressed = () => {
    console.log("prevBottle");
    if (index.current <= 0) return;
    index.current--;
    loadBottle();
  };

  const onPlayPausePressed = () => {
    if (!bottle) return;
    if (playing) {
      bottle.pauseAsync();
      setPlaying(false);
    } else {
      bottle.playAsync();
      setPlaying(true);
    }
  };

  const onReplayPressed = async () => {
    console.log("onReplay called")
    if (!bottle) return;

    console.log("Replaying...")
    await bottle.replayAsync({
      shouldPlay: true,
      positionMillis: 0
    });
    setReplayable(false);
    setPlaying(true);
  };

  return (
    <Center flex={1} px="5" py={Constants.statusBarHeight}>
      <VStack w="100%" h="100%" alignItems="center" justifyContent="flex-end">
        <HStack w="100%" justifyContent="space-between" mt="5" mb="auto">
          <IconButton onPress={() => navigation.navigate('Home')}
            iconLibrary={MaterialCommunityIcons} iconName="home">
            {"Home"}
          </IconButton>
          <IconButton onPress={() => navigation.goBack()}
            iconLibrary={FontAwesome} iconName="tags">
            {"Tags"}
          </IconButton>
        </HStack>
        {replayable ?
          <IconButton onPress={onReplayPressed}
            iconLibrary={FontAwesome} iconName="repeat">
            {"Replay"}
          </IconButton>
          :
          <IconButton onPress={onPlayPausePressed}
            iconLibrary={MaterialCommunityIcons} iconName={playing ? "pause" : "play"}>
            {playing ? "Pause" : "Play"}
          </IconButton>
        }
        <HStack w="100%" justifyContent="space-between">
          <IconButton onPress={onPrevBottlePressed} isDisabled={index.current <= 0}
            iconLibrary={MaterialCommunityIcons} iconName="arrow-left-bold">
            {"Prev Bottle"}
          </IconButton>
          <IconButton onPress={onNextBottlePressed} isDisabled={index.current >= audioPaths.length - 1}
            iconLibrary={MaterialCommunityIcons} iconName="arrow-right-bold">
            {"Next Bottle"}
          </IconButton>
        </HStack>
      </VStack>
    </Center>
  );
}