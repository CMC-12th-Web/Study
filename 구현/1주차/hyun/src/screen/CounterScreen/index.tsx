import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {screenStyle} from '../../styles/common';

import Button from './components/button';

const CounterScreen = () => {
  const [count, setCount] = useState(0);
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.resultContainer}>
        <Text style={styles.text}>{count}</Text>
      </View>
      <View>
        <Button number={1} onPress={setCount} />
        <Button number={-1} onPress={setCount} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  ...screenStyle,
  resultContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {fontSize: 30},
});

export default CounterScreen;
