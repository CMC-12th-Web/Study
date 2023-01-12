import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {CompositeScreenProps} from '@react-navigation/native';

import type {HomeTabParamList} from './HomeTabScreen';
import type {RootStackParamList} from '../../App';

import {screenStyle} from '../styles/common';

// type Props = NativeStackScreenProps<HomeTabParamList, '홈'>;
type Props = CompositeScreenProps<
  NativeStackScreenProps<HomeTabParamList, '홈'>,
  NativeStackScreenProps<RootStackParamList>
>;

const HomeScreen = ({navigation}: Props) => {
  const handlePress = () => {
    navigation.navigate('디테일');
  };
  return (
    <View style={styles.screen}>
      <Pressable onPress={handlePress}>
        <Text style={styles.text}>상세보기</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  ...screenStyle,
  text: {
    color: 'blue',
    fontSize: 20,
  },
});

export default HomeScreen;
