import {FlatList, Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { category, dummy } from '../dummy';
import StoryItem from '../components/StoryItem';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
  storyDetail: undefined;
};
type Props = NativeStackScreenProps<RootStackParamList>;

const Place = ({navigation}: Props) => {

  return (
    <View style={styles.view}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {category.map((ele) => (
          <View style={styles.category} key={ele}>
            <Text>{ele}</Text>
          </View>
        ))}
      </ScrollView>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={dummy} 
        renderItem={() => {
          return (
            <Pressable onPress={() => navigation.navigate('storyDetail')}>
              <StoryItem />
            </Pressable>
          )
        }} 
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
    backgroundColor: '#fff',
    paddingTop: 20,
  },
  category: {
    width: 70,
    height: 70,
    borderRadius: 999,
    backgroundColor: '#f7f7f7',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    marginBottom: 40
  }
})

export default Place;