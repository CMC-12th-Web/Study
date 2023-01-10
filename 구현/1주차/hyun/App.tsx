import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import ToggleBoxScreen from './src/screen/ToggleBoxScreen';

const App = () => {
  return (
    <SafeAreaProvider>
      <ToggleBoxScreen />
    </SafeAreaProvider>
  );
};

export default App;
