import {useFocusEffect} from '@react-navigation/native';
import React from 'react';
import {View, Button} from 'react-native';

function HomeScreen({navigation, setOnDetail}) {
  useFocusEffect(
    React.useCallback(() => {
      setOnDetail(false);
    }, [setOnDetail]),
  );

  return (
    <View>
      <Button
        title="상세 보기"
        onPress={() => {
          navigation.navigate('Detail');
        }}
      />
    </View>
  );
}

export default HomeScreen;
