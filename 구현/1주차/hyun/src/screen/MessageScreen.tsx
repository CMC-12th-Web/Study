import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {screenStyle} from '../styles/common';

const MessageScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Message</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  ...screenStyle,
});

export default MessageScreen;
