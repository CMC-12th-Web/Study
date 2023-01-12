import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {screenStyle} from '../styles/common';

const SearchScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Search</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  ...screenStyle,
});

export default SearchScreen;
