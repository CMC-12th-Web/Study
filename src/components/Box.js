import React from 'react';
import {StyleSheet, View, Button} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const Box = ({rounded, size, color}) => {
  return (
    <>
      <SafeAreaProvider>
        <View 
            style={styles(rounded, size, color).box}>
        </View>
      </SafeAreaProvider>
    </>
  );
};

export default Box;

const styles = (rounded, size, color) => StyleSheet.create({  
    box: {
        width: (size === 'small'? 50: size === 'large'? 150: 100),
        height: (size === 'small'? 50: size === 'large'? 150: 100),
      
        borderRadius: (rounded&&15),
        backgroundColor: color,
    },
});