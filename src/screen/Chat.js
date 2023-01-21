import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import ChatList from '../components/chatting/ChatList';

const Chat = () => {

  return (
    <>
      <SafeAreaView>
        <ChatList />
      </SafeAreaView>
    </>
  );
};

export default Chat;
