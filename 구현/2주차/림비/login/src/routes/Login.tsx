import React, { useState } from 'react';
import { Button, SafeAreaView, Text } from 'react-native';
import { getProfile, KakaoOAuthToken, KakaoProfile, login, logout, unlink } from '@react-native-seoul/kakao-login';
import { styles } from '../styles';

function Login(): JSX.Element {
  const [result, setResult] = useState<string>('');
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const signInWithKakao = async (): Promise<void> => {
    const token: KakaoOAuthToken = await login();
    setIsLoggedIn(prev => !prev);
    setResult('로그인 성공');
    console.log('token', token);
  };

  const signOutWithKakao = async (): Promise<void> => {
    const message = await logout();
    setIsLoggedIn(prev => !prev);
    setResult('로그아웃 성공');
    console.log('로그아웃 성공', message);
  };

  const getKakaoProfile = async (): Promise<void> => {
    const profile: KakaoProfile = await getProfile();
    console.log(profile)
    setResult(`사용자 닉네임: ${profile.nickname}`);
  };

  const unlinkKakao = async (): Promise<void> => {
    const message = await unlink();
    console.log(message);
  };

  return (
    <SafeAreaView style={styles.container}>
      {isLoggedIn ? (
        <>
          <Button title="로그아웃" onPress={signOutWithKakao} />
          <Button title="프로필 보기" onPress={getKakaoProfile} />
        </>
      ) : (
        <Button title="카카오 로그인" onPress={signInWithKakao} />
      )}
      
      <Text>{result}</Text>
    </SafeAreaView>
  );
}

export default Login;
