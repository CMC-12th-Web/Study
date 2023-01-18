import React from 'react'
import { View, StyleSheet, SafeAreaView } from 'react-native'

function Box({ rounded, size, color }) {
  return (
    <SafeAreaView>
      <View
        style={styles(rounded, size, color).box}
      />
    </SafeAreaView>
  )
}

const styles = (rounded, size, color) => StyleSheet.create({
  box: {
    width: size === 'large' ? 128 : size === 'medium' ? 96 : 64,
    height: size === 'large' ? 128 : size === 'medium' ? 96 : 64,
    borderRadius: rounded ? 15 : 0,
    backgroundColor: color
  }
});

export default Box