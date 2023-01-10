import React, {useState} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  return (
    <>
      <SafeAreaView>
        <Text>Home</Text>
        <Button
            title="상세보기"
            onPress={() => {navigation.navigate("Detail", {id: 1})}}
        />
      </SafeAreaView>
    </>
  );
};

export default Home;
