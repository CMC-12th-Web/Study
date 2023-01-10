import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const MessageScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Message</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignSelf: 'stretch',
  },
});

export default MessageScreen;
