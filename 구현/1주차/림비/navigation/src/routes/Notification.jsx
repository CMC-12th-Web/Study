import { View, Text, Button, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'

function Notification({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Notification</Text>
      </View>
    </SafeAreaView>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
export default Notification;