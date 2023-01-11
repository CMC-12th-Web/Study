import { View, Text, Button, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import { styles } from '../styles';

function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Home</Text>
        <Button
          title='상세보기'
          onPress={() => navigation.navigate('Detail', { id: 1 })}
        />
      </View>
    </SafeAreaView>

  )
}

export default Home;