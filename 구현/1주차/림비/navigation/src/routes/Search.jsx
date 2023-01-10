import { View, Text, Button, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'

function Search({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Search</Text>
      </View>
    </SafeAreaView>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
export default Search;