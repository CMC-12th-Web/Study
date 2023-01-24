import React, {useEffect, useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {
  logout,
  getProfile,
  KakaoProfile,
} from '@react-native-seoul/kakao-login';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList, Screens} from '../types/type';

type AfterLoginProps = NativeStackScreenProps<
  RootStackParamList,
  Screens.AfterLogin
>;

const AfterLogin = ({navigation}: AfterLoginProps) => {
  const [nickname, setNickname] = useState<string>('');

  const signOutWithKakao = async (): Promise<void> => {
    try {
      await logout();
    } catch (err) {
      console.error('signOut error', err);
    }
  };

  useEffect(() => {
    const getKakaoProfile = async (): Promise<void> => {
      try {
        const profile: KakaoProfile = await getProfile();
        setNickname(profile.nickname);
      } catch (err) {
        console.error('signOut error', err);
      }
    };
    getKakaoProfile();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 24}}>{nickname}, Welcome!</Text>
      <Pressable
        style={styles.button}
        onPress={() => {
          signOutWithKakao();
          navigation.navigate('BeforeLogin');
        }}>
        <Text style={styles.text}>카카오 로그아웃</Text>
      </Pressable>
    </View>
  );
};

export default AfterLogin;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 100,
  },
  button: {
    backgroundColor: '#FEE500',
    borderRadius: 40,
    borderWidth: 1,
    width: 250,
    height: 40,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 30,
  },
  text: {
    textAlign: 'center',
  },
});
