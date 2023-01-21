import React, {useState} from 'react';
import {StyleSheet, Dimensions, ScrollView, View, Text, Image, Button} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

const appWidth = Dimensions.get('window').width;
const Detail = () => {
  const navigation = useNavigation();

  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <Image source={require('../assets/test.png')} style={styles.img} />
          <Text>편하게 거래하실 분</Text>
          <Text>구로구 구로제2동</Text>
          <Text>2023.01.21</Text>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  img: {
    width: '100%',
    height: appWidth,
  },
});

export default Detail;
