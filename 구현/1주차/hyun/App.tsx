import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import HelloWorldScreen from './src/screen/HelloworldScreen';

const App = () => {
  return (
    <SafeAreaProvider>
      <HelloWorldScreen />
    </SafeAreaProvider>
  );
};

export default App;
