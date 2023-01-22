import React from 'react';
import {GestureResponderEvent, Pressable, StyleSheet, View} from 'react-native';

import {KakaoLogo} from '../assets/svgs';
import Colors from '../constants/Color';

interface ICirecleButton {
  logo: 'google' | 'naver' | 'kakao';
  onPress?: (event: GestureResponderEvent) => void;
}

const CircleButton = ({logo, onPress}: ICirecleButton) => {
  return (
    <View style={[styles.buttonContainer, styles[logo]]}>
      <Pressable
        onPress={() => {}}
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

export default CircleButton;
