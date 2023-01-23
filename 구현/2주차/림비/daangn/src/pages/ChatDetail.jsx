import { View, Text, Image, StyleSheet, SafeAreaView, TextInput, Platform } from 'react-native'
import React, { useState } from 'react'
import { styles } from '../styles/styles';
import Icon from 'react-native-vector-icons/Ionicons';

function ChatDetail({ navigation: { navigate }, route }) {
  const data = route.params.data;
  const [chat, setChat] = useState('');
  const userInfo = Object.values(data)[0].sentUser;
  const userId = userInfo.id;

  return (
    <SafeAreaView style={styles.container}>
      {
        Object.values(data).map((msg, idx) => (
          <View key={idx} style={chatStyle(userId === msg.sentUser.id).chatWrap}>
            {userId !== msg.sentUser.id && <Image source={{ uri: msg.sentUser.image }} style={style.userImg} />}
            <View style={style.chatWrapBottm}>
              {userId !== msg.sentUser.id && <Text>{msg.sentUser.id}</Text>}
              <View style={chatStyle(userId === msg.sentUser.id).chatContent}><Text style={chatStyle(userId === msg.sentUser.id).msg}>{msg.content}</Text></View>
            </View>
          </View>
        ))
      }
      <View style={style.chatForm}>
        <TextInput
          style={style.chatInput}
          placeholder='메시지를 입력하세요.'
          value={chat}
          onChangeText={(text) => setChat(text)}
          autoCapitalize='none'
        />
        <Icon name='send-outline' size={24} color={chat.length > 0 ? '#5a5a5a' : 'lightgray'} />
      </View>
    </SafeAreaView>
  )
}

export default ChatDetail;

const style = StyleSheet.create({
  chatWrapBottom: {
    display: 'flex'
  },
  userImg: {
    width: 45,
    height: 45,
    borderRadius: 50
  },
  chatForm: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 8,
    backgroundColor: '#eeecec',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: Platform.select({ios: 20, android: 10})
  },
  chatInput: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    width: '80%',
    paddingLeft: 16,
    marginHorizontal: 16,
    height: Platform.select({ios: 30})
  }
});

const chatStyle = (user) => StyleSheet.create({
  chatWrap: {
    paddingTop: 16,
    paddingHorizontal: 8,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: user ? 'flex-end' : 'flex-start'
  },
  chatContent: {
    borderColor: '#e9e9e9',
    borderWidth: 1,
    borderRadius: 15,
    backgroundColor: user ? '#e78111' : '#e9e9e9',
    padding: 8
  },
  msg: {
    color: user ? '#FFFFFF' : '#000000',
  }
})