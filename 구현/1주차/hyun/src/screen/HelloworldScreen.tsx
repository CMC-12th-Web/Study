import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const HelloWorldScreen = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <Text>Hello React!</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignSelf: 'stretch',
  },
});

export default HelloWorldScreen;
