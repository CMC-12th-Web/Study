import React, {Dispatch, SetStateAction} from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';

interface Props {
  number: number;
  onPress: Dispatch<SetStateAction<number>>;
}

const Button = ({number, onPress}: Props) => {
  const handlePress = () => {
    onPress(prev => prev + number);
  };
  return (
    <Pressable style={styles.button} onPress={handlePress}>
      <Text style={styles.text}>{number}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    height: 30,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
  },
});

export default Button;
