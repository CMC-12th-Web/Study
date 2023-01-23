import React from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { chatData } from '../data/chat';

function Chat({ navigation }) {
  return (
    <SafeAreaView>
      {
        Object.keys(chatData[0].messages).map((roomId, idx) => (
          <TouchableOpacity style={style.userInfo} key={idx} onPress={() => navigation.navigate('ChatDetail', { data: chatData[0].messages[roomId] })}>
            <Image source={{ uri: Object.values(chatData[0].messages[roomId])[0].receivedUser.image }} style={style.userImg} />
            <Text style={style.userName}>{Object.values(chatData[0].messages[roomId])[0].receivedUser.name}</Text>
          </TouchableOpacity>
        ))
      }
    </SafeAreaView>
  )
}

export default Chat;

const style = StyleSheet.create({
  userInfo: {
    padding: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: 'lightgray',
    display: 'flex',
    flexDirection: 'row'
  },
  userImg: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 16
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000'
  }
})