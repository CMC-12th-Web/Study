import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Area = () => {

  return (
    <View style={styles.view}>
      <Text>Area</Text>
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

export default Area;