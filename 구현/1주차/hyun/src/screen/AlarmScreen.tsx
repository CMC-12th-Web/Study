import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const AlarmScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Alarm</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignSelf: 'stretch',
  },
});

export default AlarmScreen;
