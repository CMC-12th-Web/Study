import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {screenStyle} from '../styles/common';

const HelloWorldScreen = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <Text>Hello React!</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  ...screenStyle,
});

export default HelloWorldScreen;
