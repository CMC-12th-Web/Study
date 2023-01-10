import React, { useState } from 'react';
import {
  Button,
  SafeAreaView,
  View
} from 'react-native';
import Box from './Box';

const App = () => {
  const [isClicked, setIsClicked] = useState(false);
  const onPressToggle = () => {
    setIsClicked((prev) => !prev)
  }

  return (
    <SafeAreaView>
      <View>
        <Button
          title='토글'
          onPress={onPressToggle}
        />
        {isClicked && <Box rounded={true} size='large' color='blue'/>}
      </View>
    </SafeAreaView>
  );
};

export default App;
