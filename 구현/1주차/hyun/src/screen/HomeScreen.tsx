import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

import type {HomeStackParamList} from './HomeStackScreen';

type Props = NativeStackScreenProps<HomeStackParamList, '홈'>;

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
  screen: {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  text: {
    color: 'blue',
    fontSize: 20,
  },
});

export default HomeScreen;
