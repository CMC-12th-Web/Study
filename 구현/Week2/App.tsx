import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import {KakaoLogo} from './src/assets/svgs';

const App = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <KakaoLogo />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    alignSelf: 'stretch',
    flex: 1,
  },
});

export default App;
