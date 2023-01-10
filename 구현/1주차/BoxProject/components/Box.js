import React from 'react';
import {View} from 'react-native';
import styles from './styles';

function Box(props) {
  return (
    <>
      <View style={styles(props).box} />
    </>
  );
}

export default Box;
