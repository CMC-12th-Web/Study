import { View, Text, Button, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import { styles } from '../styles';

function Message({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Message</Text>
      </View>
    </SafeAreaView>

  )
}

export default Message;