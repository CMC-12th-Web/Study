import React, {useState} from 'react';
import {StyleSheet, ScrollView, View, Text, Button} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import ItemList from '../components/home/ItemList';

const Home = () => {
  const navigation = useNavigation();

  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <ItemList />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Home;
