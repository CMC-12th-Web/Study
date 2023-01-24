import React from 'react';
import {StyleSheet, View} from 'react-native';

import LoginButton from '../components/LoginButton';
import Colors from '../constants/Color';

const LoginScreen = () => {
  return (
    <View style={styles.screen}>
      <LoginButton />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    alignItems: 'center',
    alignSelf: 'stretch',
    flex: 1,
    justifyContent: 'center',
  },
});

export default LoginScreen;
