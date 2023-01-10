import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Button } from 'react-native'

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.countWrap}>
        <Text style={styles.count}>{count}</Text>
      </View>
      <View style={styles.button}>
        <Button
          title='+1'
          onPress={() => setCount(count + 1)}
        />
        <Button
          title='-1'
          onPress={() => setCount(count - 1)}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  countWrap: {
    flex: 1,
    justifyContent: 'center',
  },
  count: {
    fontSize: 66,
    fontWeight: 'bold'
  },
  button: {
    width: '100%'
  }
});

export default App;
