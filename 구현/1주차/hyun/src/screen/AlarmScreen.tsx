import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {screenStyle} from '../styles/common';

const AlarmScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Alarm</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  ...screenStyle,
});

export default AlarmScreen;
