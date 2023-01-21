import React, {useState} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

import { signInWithKakao } from '../utils/KaKaoLogin';

const Login = ({ setLogin }) => {
  const navigation = useNavigation();

  return (
    <>
      <SafeAreaView>
        <Button title="로그인" onPress={()=>{setLogin(signInWithKakao)}} />
      </SafeAreaView>
    </>
  );
};

export default Login;
