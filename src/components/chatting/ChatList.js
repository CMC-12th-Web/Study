import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, ScrollView, View, Text, Image, Button} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

import { ChatData } from '../../static/ChatData';

const ChatList = () => {
  const navigation = useNavigation();

  return (
    <>
      <SafeAreaView>
        {ChatData.map((data, idx)=>{
          return (
              <TouchableOpacity 
                key={idx} 
                style={styles.box}
                onPress={() => {navigation.navigate("Chatting")}}
              >
                <Image source={require('../../assets/test.png')} style={styles.img} />
                <View style={styles.content}>
                    <Text>{data.title}</Text>
                </View>
              </TouchableOpacity>
          );
        })}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  box: {
    margin: 10,
    flexDirection: 'row',
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  content: {
    paddingLeft: 10,
    textAlign: 'center',
    justifyContent: 'center',
  },
});

export default ChatList;
