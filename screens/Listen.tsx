import * as React from 'react';
import { StyleSheet, Button } from 'react-native';
import { Text, View } from '../components/Themed';

export default function Listen({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Listen</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Button title="Home" onPress={() => navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      })} />
      <Button title="Back" onPress={() => navigation.goBack()} />
      <Button title="Play/Pause" onPress={() => console.log("Play/Pause")} />
      <Button title="Next Bottle" onPress={() => console.log("Update bottle state with new bottle")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
