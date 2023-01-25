import React from 'react';
import {Button, Text, View, StyleSheet} from 'react-native';

function Counter({number, plus, minus}) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.numberArea}>
        <Text style={styles.number}>{number}</Text>
      </View>
      <Button title="+1" onPress={plus} />
      <Button title="-1" onPress={minus} />
    </View>
  );
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  numberArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {
    fontSize: 72,
    fontWeight: 'bold',
  },
});
export default Counter;
