import {useFocusEffect} from '@react-navigation/native';
import React from 'react';
import {View, Button} from 'react-native';

function DetailScreen({navigation, setOnDetail}) {
  useFocusEffect(
    React.useCallback(() => {
      setOnDetail(true);
    }, [setOnDetail]),
  );

  return (
    <View>
      <Button title="다음" />
      <Button
        title="뒤로가기"
        onPress={() => {
          navigation.pop();
          setOnDetail(false);
        }}
      />
      <Button title="처음으로" />
    </View>
  );
}

export default DetailScreen;
