import React from 'react';
import {StyleSheet, View} from 'react-native';

import LogoutButton from '../components/LogoutButton';

const LogoutScreen = () => {
  return (
    <View style={styles.screen}>
      <LogoutButton />
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

export default LogoutScreen;
