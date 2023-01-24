import {logout} from '@react-native-seoul/kakao-login';
import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

import Colors from '../constants/Color';
import {signOut} from '../redux/authSlice';
import {useAppDispatch} from '../redux/hooks';

const LogoutButton = () => {
  const dispatch = useAppDispatch();

  return (
    <View style={styles.buttonContainer}>
      <Pressable
        onPress={async () => {
          await logout();
          dispatch(signOut());
        }}
        style={({pressed}) => [
          styles.innerContainer,
          pressed && styles.pressed,
        ]}>
        <Text>로그아웃</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: Colors.GREY_SECONDARY,
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

  pressed: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    opacity: 0.7,
  },
});

export default LogoutButton;
