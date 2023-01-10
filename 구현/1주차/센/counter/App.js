import React, {useState} from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native';
import Counter from './components/Counter';

function App(props) {
  const [number, setNumber] = useState(0);

  const plus = () => {
    setNumber(number + 1);
  };
  const minus = () => {
    setNumber(number - 1);
  };
  return (
    <SafeAreaView style={styles.full}>
      <Counter number={number} plus={plus} minus={minus} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  full: {
    flex: 1,
  },
});

export default App;
