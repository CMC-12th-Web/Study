import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const MyPage = () => {

  return (
    <View style={styles.view}>
      <Text>MyPage</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default MyPage;