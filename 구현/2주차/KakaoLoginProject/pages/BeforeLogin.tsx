import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {login} from '@react-native-seoul/kakao-login';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList, Screens} from '../types/type';

type BeforeLoginProps = NativeStackScreenProps<
  RootStackParamList,
  Screens.BeforeLogin
>;

const BeforeLogin = ({navigation}: BeforeLoginProps) => {
  const signInWithKakao = async (): Promise<void> => {
    try {
      await login();
      navigation.navigate('AfterLogin');
    } catch (err) {
      console.error('login err', err);
    }
  };

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.button}
        onPress={() => {
          signInWithKakao();
        }}>
        <Text style={styles.text}>카카오 로그인</Text>
      </Pressable>
    </View>
  );
};

export default BeforeLogin;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'flex-end',
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
    marginTop: 10,
  },
  text: {
    textAlign: 'center',
  },
});
