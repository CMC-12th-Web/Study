import {FlatList, Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import StoryItem from '../components/StoryItem';
import {dummy} from '../dummy'
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
  storyDetail: undefined;
};
type Props = NativeStackScreenProps<RootStackParamList>;

const Story = ({navigation}: Props) => {

  return (
    <View style={styles.view}>
      <FlatList 
        data={dummy} 
        renderItem={() => {
          return (
            <Pressable onPress={() => navigation.navigate('storyDetail')}>
              <StoryItem />
            </Pressable>
          )
        }} 
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{height: 20}} />} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff'
  }
})

export default Story;