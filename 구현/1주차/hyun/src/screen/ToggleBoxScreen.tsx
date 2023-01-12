import React, {useState} from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import Box from '../components/Box';

import {screenStyle} from '../styles/common';

const ToggleBoxScreen = () => {
  const [isBoxVisible, setIsBoxVisible] = useState(false);
  const handlePress = () => {
    setIsBoxVisible(prev => !prev);
  };

  return (
    <SafeAreaView style={styles.screen}>
      <Pressable onPress={handlePress}>
        <Text style={styles.text}>토글</Text>
      </Pressable>
      {isBoxVisible && <Box rounded={true} color="blue" size="medium" />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  ...screenStyle,
  text: {
    fontSize: 18,
    color: 'blue',
  },
});

export default ToggleBoxScreen;
