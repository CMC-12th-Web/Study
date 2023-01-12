import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView, StyleSheet} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeStackScreen from './src/screen/HomeTabScreen';
import DetailScreen from './src/screen/DetailScreen';

import {screenStyle} from './src/styles/common';

export type RootStackParamList = {
  홈: undefined;
  디테일: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.screen}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="홈" component={HomeStackScreen} />
            <Stack.Screen name="디테일" component={DetailScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  ...screenStyle,
});

export default App;
