import * as React from 'react';
import { StyleSheet, Heading, TouchableOpacity, View } from 'react-native';

// import { RootStackScreenProps } from '../types';

export default function NotFoundScreen(/*{ navigation }: RootStackScreenProps<'NotFound'>*/) {
  return (
    <View style={styles.container}>
      <Heading style={styles.title}>This screen doesn't exist.</Heading>
      {/* <TouchableOpacity onPress={() => navigation.replace('Root')} style={styles.link}>
        <Heading style={styles.linkHeading}>Go to home screen!</Heading>
      </TouchableOpacity> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkHeading: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
