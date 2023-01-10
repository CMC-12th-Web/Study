import React, {useState} from 'react';
import {SafeAreaView, Button} from 'react-native';
import Box from './components/Box';

function App(props) {
  const [visible, setVisible] = useState(true);

  const onPress = () => {
    setVisible(!visible);
  };

  return (
    <SafeAreaView>
      <Button title="토글" onPress={onPress} />
      {visible && <Box rounded={true} size="large" color="blue" />}
    </SafeAreaView>
  );
}

export default App;
