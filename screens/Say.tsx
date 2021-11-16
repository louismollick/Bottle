import React, { useState, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { Center, Heading, Button } from 'native-base';
import { Audio } from 'expo-av';
import { RecordingStatus } from 'expo-av/build/Audio';

const MAX_RECORDING_LENGTH = 600000; // 10 minutes in ms

export default function Say({ navigation }: { navigation: any }) {
  const [isRecording, setIsRecording] = useState(false);
  const [isPlayingBack, setPlayingBack] = useState(false);
  const [hasPerms, setHasPerms] = useState(false);
  const [recordingURI, setRecordingURI] = useState<string | null>("");
  const [playback, setPlayback] = useState<Audio.Sound | undefined>();
  const [recordingStatus, setRecordingStatus] = useState<RecordingStatus | undefined>();
  const [recording, setRecording] = useState<Audio.Recording | undefined>();

  useFocusEffect(
    useCallback(() => {
      if (!hasPerms) requestPerms();

      return () => {
        if (recording && recordingStatus?.canRecord) {
          console.log('Unloading recording on Blur');
          recording.stopAndUnloadAsync();
        }
        if (playback) playback.unloadAsync();
      };
    }, [])
  );

  const requestPerms = async () => {
    console.log('Requesting permissions..');
    const result = await Audio.requestPermissionsAsync();
    setHasPerms(result.granted);
  }

  const onRecordingStatusUpdate = (status: RecordingStatus) => {
    setRecordingStatus(status);
    if (recording && status.durationMillis > MAX_RECORDING_LENGTH) {
      stopRecording();
    }
  }

  const startRecording = async () => {
    if (hasPerms) {
      try {
        console.log('Starting recording..');
        // setIsRecording(true);
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: true,
          playsInSilentModeIOS: true,
        });
        const { recording } = await Audio.Recording.createAsync(
          Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY,
          onRecordingStatusUpdate
        );
        setRecording(recording);
        console.log('Recording started');
      } catch (err) {
        console.error('Failed to start recording', err);
      }
    }
  }

  const stopRecording = async () => {
    console.log('Stopping recording..');
    if (recording) {
      // setIsRecording(false);
      await recording.stopAndUnloadAsync();
      const uri = recording.getURI();
      setRecording(undefined);
      console.log('Recording stopped and stored at', uri);
      setRecordingURI(uri);
    }
  }

  return (
    <Center flex={1}>
      <Heading>Say</Heading>
      <Button onPress={() => navigation.goBack()}>Back</Button>
      {recording ?
        <Button onPress={stopRecording}>Stop Recording</Button>
        :
        <Button onPress={startRecording}>Start Recording</Button>
      }
      {/* Here we need to update the buttons w/ the playback, redo, cancel, and next buttons once recording is done */}
    </Center>
  );
}