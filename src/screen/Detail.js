import React, {useState} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation, useRoute} from '@react-navigation/native';

const Detail = ({route}) => {
  const navigation = useNavigation();

  return (
    <>
      <SafeAreaView>
        <Text>id: {route.params.id}</Text>
        <Button
            title="다음"
            onPress={() => {navigation.push("Detail", {id: route.params.id+1})}}
        />
        <Button
            title="뒤로가기"
            onPress={() => {navigation.pop()}}
        />
        <Button
            title="처음으로"
            onPress={() => {navigation.popToTop()}}
        />
      </SafeAreaView>
    </>
  );
};

export default Detail;
