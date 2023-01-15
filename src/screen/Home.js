import React, {useState} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

import {
  KakaoOAuthToken,
  KakaoProfile,
  getProfile as getKakaoProfile,
  login,
  logout,
  unlink,
} from '@react-native-seoul/kakao-login';

const Home = () => {
  const navigation = useNavigation();

  const signInWithKakao = async (): Promise<void> => {
    const token: KakaoOAuthToken = await login();

    setResult(JSON.stringify(token));
  };

  const signOutWithKakao = async (): Promise<void> => {
    const message = await logout();

    setResult(message);
  };

  const getKakaoProfile = async (): Promise<void> => {
    const profile: KakaoProfile = await getProfile();

    setResult(JSON.stringify(profile));
  };

  const unlinkKakao = async (): Promise<void> => {
    const message = await unlink();

    setResult(message);
  };

  return (
    <>
      <SafeAreaView>
        <Text>Home</Text>
        <Button
            title="상세보기"
            onPress={() => {navigation.navigate("Detail", {id: 1})}}
        />
        <Button title="로그인" onPress={signInWithKakao} />
      </SafeAreaView>
    </>
  );
};

export default Home;
