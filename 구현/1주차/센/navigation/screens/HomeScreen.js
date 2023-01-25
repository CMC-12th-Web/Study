import React from 'react';
import {Button, View, Text} from 'react-native';

function HomeScreen({navigation}) {
  return (
    <View>
      <Text>Home</Text>
      <Button
        title="상세보기"
        onPress={() => navigation.push('상세보기', {id: 1})}
      />
    </View>
  );
}
export default HomeScreen;
