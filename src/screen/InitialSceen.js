import React, {useState} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Box from '../components/Box';

const InitialScreen = () => {
    const [show, setShow] = useState(true);

  return (
    <>
      <SafeAreaProvider>
        <Button
            title="토글"
            onPress={()=>{
                if (show) setShow(false)
                else setShow(true)
            }}
        ></Button>
        {show&&
            <Box rounded={true} size={'medium'} color={'blue'} />
        }
      </SafeAreaProvider>
    </>
  );
};

export default InitialScreen;
