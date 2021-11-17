import React, { useState, useCallback, useRef } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { Center, Heading, Button } from 'native-base';
import { Audio, AVPlaybackStatus } from 'expo-av';
import { RecordingStatus } from 'expo-av/build/Audio';

const MAX_RECORDING_LENGTH = 600000; // 10 minutes in ms

export const recording = new Audio.Recording();

export default function Say({ navigation }: { navigation: any }) {
  const recording = useRef<Audio.Recording | undefined>(undefined);
  const [isRecording, setIsRecording] = useState(false);
  const [hasPerms, setHasPerms] = useState(false);
  const [recordingStatus, setRecordingStatus] = useState<RecordingStatus | undefined>();
  const [recordingURI, setRecordingURI] = useState<string | null>(null);

  const playback = useRef<Audio.Sound | undefined>(undefined);
  const [isPlayingBack, setIsPlayingBack] = useState(false);
  const [audioStatus, setAudioStatus] = useState<AVPlaybackStatus | undefined>()

  useFocusEffect(
    useCallback(() => {
      if (!hasPerms) requestPerms();

      return (playback.current || recording.current) ? async () => {
        console.log('onBlur called');
        if (playback.current) {
          console.log('Unloading playback on Blur');
          playback.current.setOnPlaybackStatusUpdate(null);
          playback.current.unloadAsync();
        }
        if (recording.current) {
          recording.current.setOnRecordingStatusUpdate(null);
          console.log('Unloading recording on Blur');
          try {
            await recording.current.stopAndUnloadAsync();
          } catch (error) {
            // do nothing
          }
        }
      } : undefined;
    }, [])
  );

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

      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
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
    setIsRecording(false);
    await recording.current.stopAndUnloadAsync();

    const uri = recording.current.getURI();
    console.log('Recording stopped and stored at', uri);
    if (!uri) {
      console.error("Playback URI is null");
      return;
    }
    setRecordingURI(uri);

    const { sound } = await Audio.Sound.createAsync(
      { uri },
      { shouldPlay: false },
      onPlaybackStatusUpdate
    );
    playback.current = sound;
    console.log('Playback loaded');
  }

  const onPlaybackStatusUpdate = (status: AVPlaybackStatus) => {
    if (!playback.current) return;
    if (status.isLoaded) {
      if (status.didJustFinish) {
        setIsPlayingBack(false);
        playback.current.replayAsync({
          positionMillis: 0,
          shouldPlay: false
        });
      }
    } else if (status.error)
      console.log(`FATAL PLAYER ERROR: ${status.error}`);
  };

  const onPlaybackPressed = () => {
    togglePlayback(!isPlayingBack);
  }

  const togglePlayback = async (play: boolean) => {
    if (!playback.current) return;
    if (play) {
      setIsPlayingBack(true);
      await playback.current.playAsync();
    } else {
      setIsPlayingBack(false);
      await playback.current.pauseAsync();
    }
  };

  const onRedoPressed = async () => {
    if (playback.current) playback.current.unloadAsync();
    setRecordingURI(null);
  }

  return (
    <Center flex={1}>
      <Heading>Say</Heading>
      <Button onPress={() => navigation.navigate('Home')}>Home</Button>

      {recordingURI ?
        <>
          <Button onPress={onPlaybackPressed}>{isPlayingBack ? "Pause Playback" : "Play Playback"}</Button>
          <Button onPress={onRedoPressed}>Redo</Button>
          <Button onPress={() => navigation.navigate('SayTagSelect')}>Next</Button>
        </>
        :
        isRecording ?
          <Button onPress={stopRecording}>Stop Recording</Button>
          :
          <Button onPress={startRecording}>Start Recording</Button>
      }

      {/* Here we need to update the buttons w/ the playback, redo, cancel, and next buttons once recording is done */}
    </Center>
  );
}