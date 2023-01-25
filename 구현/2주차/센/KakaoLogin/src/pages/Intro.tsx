import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, Pressable, Image} from 'react-native';
import {
  login,
  logout,
  getProfile as getKakaoProfile,
} from '@react-native-seoul/kakao-login';
import IntroView from './IntroView';

function Intro(props) {
  const [result, setResult] = useState<string>('');

  const signInWithKakao = async (): Promise<void> => {
    try {
      const token = await login();
      setResult(JSON.stringify(token));
    } catch (err) {
      console.error('login err', err);
    }
  };
  const signOutWithKakao = async (): Promise<void> => {
    try {
      const message = await logout();

      setResult(message);
    } catch (err) {
      console.error('signOut error', err);
    }
  };

  const getProfile = async (): Promise<void> => {
    try {
      const profile = await getKakaoProfile();

      setResult(JSON.stringify(profile));
    } catch (err) {
      console.error('signOut error', err);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>LOG IN</Text>
      <IntroView result={result} />
      <Pressable
        style={styles.login}
        onPress={() => {
          signInWithKakao();
        }}>
        <Image
          source={require('../../assets/images/kakao_login_medium_narrow.png')}
        />
      </Pressable>
      <Pressable style={styles.button} onPress={() => getProfile()}>
        <Text style={styles.text}>프로필 조회</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => signOutWithKakao()}>
        <Text style={styles.text}>로그아웃</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    paddingTop: 200,
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: '300',
  },
  login: {
    justifyContent: 'flex-end',
    paddingBottom: 10,
    marginTop: 10,
  },
  button: {
    backgroundColor: '#FEE500',
    marginBottom: 10,
    width: 183,
    height: 46,
    borderRadius: 10,
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 14,
  },
});

export default Intro;
