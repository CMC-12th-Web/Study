import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StyleSheet, Text, View} from 'react-native';

import {screenStyle} from '../styles/common';

import type {RootStackParamList} from '../../App';

type Props = NativeStackScreenProps<RootStackParamList, '디테일'>;

const DetailScreen = ({navigation}: Props) => {
  return (
    <View style={styles.screen}>
      <Text>디테일</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  ...screenStyle,
});

export default DetailScreen;
