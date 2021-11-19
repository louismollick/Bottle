import React, { useState, useRef, useEffect } from 'react';
import { Center, Heading, VStack, HStack } from 'native-base';
import { Audio, AVPlaybackStatus } from 'expo-av';
import { RecordingStatus } from 'expo-av/build/Audio';
import { MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons"
import Constants from 'expo-constants';
import IconButton from '../components/IconButton';

const MAX_RECORDING_LENGTH = 600000; // 10 minutes in ms

export const recording = new Audio.Recording();

export default function Say({ navigation }: { navigation: any }) {
  const recording = useRef<Audio.Recording | undefined>(undefined);
  const [isRecording, setIsRecording] = useState(false);
  const [hasPerms, setHasPerms] = useState(false);
  const [recordingStatus, setRecordingStatus] = useState<RecordingStatus | undefined>();
  const [recordingURI, setRecordingURI] = useState<string | null>(null);

  const playback = useRef<Audio.Sound | undefined>(undefined);
  const [replayable, setReplayable] = useState(false);
  const [isPlayingBack, setIsPlayingBack] = useState(false);
  const [audioStatus, setAudioStatus] = useState<AVPlaybackStatus | undefined>()

  useEffect(() => {
    if (!hasPerms) requestPerms();
    return () => {
      console.log('unMount called');
      if (playback.current) {
        console.log('Unloading playback on unMount');
        playback.current.setOnPlaybackStatusUpdate(null);
        playback.current.unloadAsync().catch(() => { });
      }
      if (recording.current) {
        console.log('Unloading recording on unMount');
        recording.current.setOnRecordingStatusUpdate(null);
        recording.current.stopAndUnloadAsync().catch(() => { });
      }
    }
  }, []);

  const requestPerms = async () => {
    console.log('Requesting permissions...');
    const result = await Audio.requestPermissionsAsync();
    setHasPerms(result.granted);
  }

  const onRecordingStatusUpdate = (status: RecordingStatus) => {
    setRecordingStatus(status);
    if (status.durationMillis > MAX_RECORDING_LENGTH)
      stopRecording();
  }

  const startRecording = async () => {
    if (!hasPerms) {
      console.log('Insufficient permissions');
      return;
    }
    try {
      console.log('startRecording called');
      setIsRecording(true);

      Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        staysActiveInBackground: false,
        playsInSilentModeIOS: true,
        shouldDuckAndroid: true,
        interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
        playThroughEarpieceAndroid: false
      });
      const { recording: rec } = await Audio.Recording.createAsync(
        Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY,
        onRecordingStatusUpdate
      );

      recording.current = rec;
      console.log('Starting recording...');
    } catch (err) {
      console.error('Failed to start recording', err);
    }
  }

  const stopRecording = async () => {
    console.log('stopRecording called');
    if (!recording.current) return;

    console.log('Stopping recording...');
    await recording.current.stopAndUnloadAsync();

    const uri = recording.current.getURI();
    console.log('Recording stopped and stored at', uri);
    if (!uri) {
      console.error("Playback URI is null");
      return;
    }
    setRecordingURI(uri);

    if (playback.current)
      await playback.current.unloadAsync();

    const { sound } = await Audio.Sound.createAsync(
      { uri },
      { shouldPlay: false, isLooping: false },
      onPlaybackStatusUpdate
    );
    playback.current = sound;
    console.log('Playback loaded');
    setIsRecording(false);
  }

  const onPlaybackStatusUpdate = (status: AVPlaybackStatus) => {
    if (!playback.current) return;
    if (status.isLoaded) {
      if (status.didJustFinish) {
        console.log("Reloading...")
        playback.current.setPositionAsync(0);
        setReplayable(true);
        setIsPlayingBack(false);
      }
    } else if (status.error)
      console.log(`FATAL PLAYER ERROR: ${status.error}`);
  };

  const onPlaybackPressed = () => {
    playOrPause(!isPlayingBack);
  }

  const playOrPause = async (play: boolean) => {
    if (!playback.current) return;
    if (play) {
      setIsPlayingBack(true);
      await playback.current.playAsync();
    } else {
      setIsPlayingBack(false);
      await playback.current.pauseAsync();
    }
  };

  const onRedoPressed = () => {
    playOrPause(false);
    setRecordingURI(null);
    setIsPlayingBack(false);
    setReplayable(false);
  }

  const onNextPressed = () => {
    setReplayable(false);
    setIsPlayingBack(false);
    navigation.push('SayTagSelect')
  }

  const onReplayPressed = async () => {
    setReplayable(false);
    onPlaybackPressed();
  };

  return (
    <Center flex={1} px="5" py={Constants.statusBarHeight}>
      <VStack w="100%" h="100%" alignItems="center" justifyContent="space-between">
        <HStack w="100%" justifyContent="space-between" mt="5" mb="auto">
          <IconButton onPress={() => navigation.navigate('Home')}
            iconLibrary={MaterialCommunityIcons} iconName="home">
            {"Home"}
          </IconButton>
        </HStack>
        {recordingURI &&
          <VStack w="100%" alignItems="center" my="auto">
            <Heading size="xl" mb="5" textAlign="center">Listen back to your Bottle</Heading>
            {replayable ?
              <IconButton onPress={onReplayPressed}
                iconLibrary={FontAwesome} iconName="repeat">
                {"Replay"}
              </IconButton>
              :
              <IconButton onPress={onPlaybackPressed}
                iconLibrary={MaterialCommunityIcons} iconName={isPlayingBack ? "pause" : "play"}>
                {isPlayingBack ? "Pause" : "Play"}
              </IconButton>
            }
          </VStack>
        }
        <HStack w="100%" justifyContent="space-between">
          {recordingURI ?
            <>
              <IconButton onPress={onRedoPressed}
                iconLibrary={FontAwesome} iconName={"refresh"}>
                {"Redo"}
              </IconButton>
              <IconButton onPress={onNextPressed}
                iconLibrary={MaterialCommunityIcons} iconName="arrow-right-bold">
                {"Next"}
              </IconButton>
            </>
            :
            <IconButton w="125" h="100" mx="auto" mb="40" onPress={isRecording ? stopRecording : startRecording}
              iconLibrary={MaterialCommunityIcons} iconName={"record-circle"} color={isRecording ? "error.500" : ""}>
              {isRecording ? "Stop Recording" : "Start Recording"}
            </IconButton>
          }
        </HStack>
      </VStack>
    </Center>
  );
}