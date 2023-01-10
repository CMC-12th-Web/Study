import React, {useState} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const InitialScreen = () => {
    const [count, setCount] = useState(0);

  return (
    <>
      <SafeAreaProvider>
        <View style={styles.box}>
            <Text style={styles.num}>{count}</Text>
        </View>
        <Button title='+1' onPress={()=>setCount(count+1)}></Button>
        <Button title='-1' onPress={()=>setCount(count-1)}></Button>
      </SafeAreaProvider>
    </>
  );
};

export default InitialScreen;

const styles = StyleSheet.create({
    box: {
        flex: 1,
        
        justifyContent: 'center',
        alignItems: 'center',
    },
    num: {
        textAlign: 'center',
        fontSize: 66,
        fontWeight: '800',
    },
})
