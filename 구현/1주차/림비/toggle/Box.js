import React from 'react'
import { View, StyleSheet, SafeAreaView } from 'react-native'

function Box({ rounded, size, color }) {
  return (
    <SafeAreaView>
      <View
        style={styles(color).box}
      />
    </SafeAreaView>
  )
}

const styles = (color) => StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    borderRadius: 15,
    backgroundColor: color
  },
});

export default Box