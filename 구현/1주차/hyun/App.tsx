import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import CounterScreen from './src/screen/CounterScreen';

const App = () => {
  return (
    <SafeAreaProvider>
      <CounterScreen />
    </SafeAreaProvider>
  );
};

export default App;
