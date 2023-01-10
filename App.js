import * as React from 'react';
import {Dispatch, SetStateAction, useEffect, useState} from 'react';
import {Text, View} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import InitialScreen from './src/screen/InitialSceen'

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {

  useEffect(() => {
  }, []);

  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <Stack.Navigator
          initialRouteName="InitialScreen"
          screenOptions={{headerShown: false}}>
          <Stack.Screen
            name="InitialScreen"
            children={() => <InitialScreen />}
          />
        </Stack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}