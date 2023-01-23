import {KakaoOAuthToken, login} from '@react-native-seoul/kakao-login';
import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';

import {KakaoLogo} from '../assets/svgs';
import Colors from '../constants/Color';
import {signIn} from '../redux/authSlice';
import {useAppDispatch} from '../redux/hooks';

const LoginButton = () => {
  const dispatch = useAppDispatch();

  return (
    <View style={[styles.buttonContainer, styles.kakao]}>
      <Pressable
        onPress={async () => {
          try {
            const token: KakaoOAuthToken = await login();
            dispatch(
              signIn({
                accessToken: token.accessToken,
                refreshToken: token.refreshToken,
              }),
            );
          } catch (e) {
            console.log(e);
          }
        }}
        style={({pressed}) => [
          styles.innerContainer,
          pressed && styles.pressed,
        ]}>
        <KakaoLogo />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 37,
    height: 74,
    width: 74,
  },
  google: {
    backgroundColor: Colors.google,
    borderColor: Colors.border,
    borderWidth: 1,
  },
  innerContainer: {
    alignItems: 'center',
    alignSelf: 'stretch',
    flex: 1,
    justifyContent: 'center',
  },
  kakao: {backgroundColor: Colors.kakao},
  naver: {backgroundColor: Colors.naver},
  pressed: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    opacity: 0.7,
  },
});

export default LoginButton;
