import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Button from './components/button';
const CounterScreen = () => {
  const [count, setCount] = useState(0);
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.resultContainer}>
        <Text style={styles.text}>{count}</Text>
      </View>
      <View>
        <Button number={1} onClick={setCount} />
        <Button number={-1} onClick={setCount} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignSelf: 'stretch',
  },
  resultContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {fontSize: 30},
});

export default CounterScreen;
