import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StyleSheet, Text, View} from 'react-native';
import type {HomeStackParamList} from './HomeStackScreen';

type Props = NativeStackScreenProps<HomeStackParamList, '디테일'>;

const DetailScreen = ({navigation}: Props) => {
  navigation.setOptions({});

  return (
    <View style={styles.screen}>
      <Text>디테일</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignSelf: 'stretch',
  },
});

export default DetailScreen;
