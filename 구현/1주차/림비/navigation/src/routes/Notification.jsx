import { View, Text, Button, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import { styles } from '../styles';

function Notification({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Notification</Text>
      </View>
    </SafeAreaView>

  )
}

export default Notification;