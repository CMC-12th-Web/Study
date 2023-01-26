import {Dimensions, StyleSheet, Text, TextInput, View} from 'react-native';
import React, { useState } from 'react';

const StoryDetail = () => {
  return (
    <View style={styles.view}>
      <Text>Story detail</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
})

export default StoryDetail;