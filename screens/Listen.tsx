import React, { useState, useEffect } from 'react';
import { Center, Heading, Button } from 'native-base';
import { Audio, AVPlaybackStatus } from 'expo-av';
import audioFiles from '../utils/audioFiles'

export default function Listen({ route, navigation }: { route: any, navigation: any }) {
  //   const [bottle, setBottle] = useState<Audio.Sound>();
  //   const [status, setBottleStatus] = useState<AVPlaybackStatus>();
  //   const [index, setIndex] = useState<number>(0);
  //   const audioPaths: string[] = route.params;

  //   async function playNext() {
  //     if (bottle) {
  //       console.log('Unloading Sound');
  //       await bottle.stopAsync();
  //       await bottle.unloadAsync();
  //     }

  //     console.log('Loading Sound');
  //     console.log(audioPaths);
  //     const { sound, status } = await Audio.Sound.createAsync(
  //       audioFiles[audioPaths[index]]
  //     );
  //     setBottle(sound);
  //     setBottleStatus(status);

  //     console.log('Playing Sound');
  //     await bottle?.playAsync();
  //   }

  //   useEffect(() => {
  //     playNext();
  //     return bottle
  //       ? () => {
  //         console.log('Unloading Sound');
  //         bottle.unloadAsync();
  //       }
  //       : undefined;
  //   }, []);

  //   return (
  //     <Center flex={1}>
  //       <Heading>Listen</Heading>
  //       <Button onPress={() => navigation.reset({
  //         index: 0,
  //         routes: [{ name: 'Home' }],
  //       })}>Home</Button>
  //       <Button onPress={() => navigation.goBack()}>Back</Button>
  //       <Button onPress={async () => {
  //         if (bottle && status?.isLoaded)
  //           return status?.isPlaying ? bottle?.pauseAsync() : bottle?.playAsync();
  //       }}>{status?.isLoaded && status?.isPlaying ? "Pause" : "Play"}</Button>
  //       <Button onPress={() => {
  //         setIndex(index === audioPaths.length ? 0 : index + 1);
  //         playNext();
  //       }}>Next Bottle</Button>
  //     </Center>
  //   );
  // }


  // TODO Example program from here: https://docs.expo.dev/versions/latest/sdk/audio/#playing-sounds
  // Doesn't work for me using LAN (expo start & then scanning QR code) -- maybe try running on iOS
  // simulator instead & seeing if it's different.
  const [sound, setSound] = React.useState<Audio.Sound>();

  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(
      require('../assets/audio/Happy.mp3')
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync();
  }

  React.useEffect(() => {
    return sound
      ? () => {
        console.log('Unloading Sound');
        sound.unloadAsync();
      }
      : undefined;
  }, [sound]);

  return (
      <Button onPress={playSound}>Play Sound</Button>
  );
}