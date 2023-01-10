import * as React from 'react';
import {Dispatch, SetStateAction, useState, useEffect} from 'react';
import {Text, View} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

import Home from './src/screen/Home';
import Alarm from './src/screen/Alarm';
import Search from './src/screen/Search';
import Message from './src/screen/Message';
import Detail from './src/screen/Detail';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {

  useEffect(() => {
  }, []);

  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <StackNavigator />
        {/* <TabNavigator /> */}
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

const StackNavigator = () => {
  return (
  <Stack.Navigator
    initialRouteName="Home">
    <Stack.Screen
      name="Home"
      children={TabNavigator}
    />
    <Stack.Screen name="Detail" component={Detail} options={{tabBarStyle: {display: 'none'},}} />
    {/* <Stack.Screen name="Search" component={Search} /> */}
    {/* <Stack.Screen name="Message" component={Message} /> */}
  </Stack.Navigator>
  );
}

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="홈"
        component={Home}
        options={{
          headerShown: false,

          tabBarIcon: ({color}) => (
            <Icon name={"home"} size={25} color={color} />
          ),
          unmountOnBlur: true,
        }}
      />
      <Tab.Screen
        name="알람"
        component={Alarm}
        options={{
          headerShown: false,

          tabBarIcon: ({color}) => (
            <Icon name={"notifications"} size={25} color={color} />
          ),
          unmountOnBlur: true,
        }}
      />
      <Tab.Screen
        name="검색"
        component={Search}
        options={{
          headerShown: false,

          tabBarIcon: ({color}) => (
            <Icon name={"search"} size={25} color={color} />
          ),
          unmountOnBlur: true,
        }}
      />
      <Tab.Screen
        name="메시지"
        component={Message}
        options={{
          headerShown: false,

          tabBarIcon: ({color}) => (
            <Icon name={"chatbox-ellipses"} size={25} color={color} />
          ),
          unmountOnBlur: true,
        }}
      />
    </Tab.Navigator>
  );
}