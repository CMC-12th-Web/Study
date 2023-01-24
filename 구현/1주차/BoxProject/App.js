/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {SafeAreaView, Button, View} from 'react-native';
import Box from './components/Box';

const App = () => {
  const [visible, setVisible] = useState(true);
  const toggle = () => {
    setVisible(prev => !prev);
  };

  return (
    <SafeAreaView>
      <View>
        <Button title="토글" onPress={toggle} />
        {visible && <Box rounded={true} size="large" color="purple" />}
      </View>
    </SafeAreaView>
  );
};

export default App;
