import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Area from './Area';
import Story from './Story';
const TopTab = createMaterialTopTabNavigator();

const Home = () => {

  return (
    <TopTab.Navigator initialRouteName='Area'>
      <TopTab.Screen name="공간" component={Area} />
      <TopTab.Screen name="스토리" component={Story} />
    </TopTab.Navigator>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default Home;