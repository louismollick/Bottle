import React, { useState, useCallback, useRef } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { Center, Heading, Button } from 'native-base';
import { Audio, AVPlaybackStatus } from 'expo-av';
import audioFiles from '../utils/audioFiles';

export default function Listen({ route, navigation }: { route: any, navigation: any }) {
  const index = useRef(0);
  const [playing, setPlaying] = useState(true);
  const [bottle, setBottle] = useState<Audio.Sound | undefined>(undefined);
  const audioPaths: string[] = route.params;

  const loadNewBottle = async () => {
    if (bottle) {
      console.log('Unloading Sound on load');
      await bottle.unloadAsync();
    }
    const { sound } = await Audio.Sound.createAsync(
      audioFiles[audioPaths[index.current]], // { uri: PLAYLIST[this.index].uri }; Use this once we put the audios on AWS
      { shouldPlay: true },
      onPlaybackStatusUpdate
    );
    setBottle(sound);
    console.log('Playing new bottle');
  }

  const onPlaybackStatusUpdate = (status: AVPlaybackStatus) => {
    if (status.isLoaded) {
      if (status.didJustFinish) onNextBottlePressed();
    } else if (status.error)
      console.log(`FATAL PLAYER ERROR: ${status.error}`);
  };

  const onNextBottlePressed = async () => {
    if (bottle) {
      index.current++;
      loadNewBottle();
    }
  };

  const onPlayPausePressed = () => {
    if (bottle) {
      if (playing) {
        bottle.pauseAsync();
        setPlaying(false);
      } else {
        bottle.playAsync();
        setPlaying(true);
      }
    }
  };

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
        loadNewBottle(); // plays bottle automatically
      }

      return bottle ? () => {
        console.log('Unloading Sound on Blur');
        bottle.unloadAsync();
      } : undefined;
    }, [bottle])
  );

  return (
    <Center flex={1}>
      <Heading>Listen</Heading>
      <Button onPress={() => navigation.navigate('Home')}>Home</Button>
      <Button onPress={() => navigation.goBack()}>Back</Button>
      <Button onPress={onPlayPausePressed}>{playing ? "Pause" : "Play"}</Button>
      <Button onPress={onNextBottlePressed}>Next Bottle</Button>
    </Center>
  );
}