import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, ScrollView, View, Text, Image, Button} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import { ItemData } from '../../static/ItemData';

const ItemList = () => {
  const navigation = useNavigation();

  return (
    <>
      <SafeAreaView>
        {ItemData.map((data, idx)=>{
          return (
            <TouchableOpacity 
              key={idx}
              onPress={() => {navigation.navigate("Detail")}}>
              <View style={styles.box}>
                <Image 
                  source={require('../../assets/test.png')} 
                  style={styles.img} 
                />
                <View style={styles.content}>
                  <Text>{data.title}</Text>
                  <Text>{data.location}</Text>
                </View>
              </View>
              <View style={styles.hr} />
            </TouchableOpacity>
          );
        })}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  box: {
    flex: 1,
    padding: 18,
    flexDirection: 'row',
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  content: {
    paddingLeft: 18,
  },

  hr: {
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default ItemList;
