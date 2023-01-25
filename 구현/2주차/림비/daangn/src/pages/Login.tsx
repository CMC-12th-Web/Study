import React, { useState } from 'react';
import { Image, Pressable, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { getProfile, KakaoOAuthToken, KakaoProfile, login, logout, unlink } from '@react-native-seoul/kakao-login';
import loginBtn from '../assets/kakao_login_medium_narrow.png';

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
    <SafeAreaView style={style.container}>
      {isLoggedIn ? (
        <View style={style.loginWrap}>
          <Pressable style={style.btn} onPress={signOutWithKakao}>
            <Text style={style.text}>로그아웃</Text>
          </Pressable>
          <Pressable style={style.btn} onPress={getKakaoProfile}>
            <Text style={style.text}>프로필 보기</Text>
          </Pressable>
        </View>
      ) : (
          <TouchableOpacity style={style.loginWrap} onPress={signInWithKakao} >
            <Image source={loginBtn}/>
          </TouchableOpacity>
      )}
      
      <Text>{result}</Text>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center'
  },
  loginWrap: {
    marginTop: '30%'
  },
  btn: {
    borderRadius: 12,
    backgroundColor: '#FEE500',
    width: 180,
    alignItems: 'center',
    padding: 12,
    marginBottom: 8
  },
  text: {
    fontWeight: 'bold'
  }
})
export default Login;