import React, {useState} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

import { signOutWithKakao } from '../utils/KaKaoLogin';

const Profile = ({ setLogin }) => {
  const navigation = useNavigation();

  return (
    <>
      <SafeAreaView>
        <Button 
            title="로그아웃" 
            onPress={()=>{
                setLogin(signOutWithKakao)
            }} />
      </SafeAreaView>
    </>
  );
};

export default Profile;
