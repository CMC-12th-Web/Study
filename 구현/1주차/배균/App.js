import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import BottomNavigation from './src/BottomNavigation';
import { color } from './src/common';
import MakeDiary from './src/pages/MakeDiary';
import MakeTodo from './src/pages/MakeTodo';
const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle={'light-content'} />
      <SafeAreaView style={styles.container}>
        <Stack.Navigator initialRouteName='Root' screenOptions={{ headerShown: false }}>
          <Stack.Screen name='Root' component={BottomNavigation} />
          <Stack.Screen name='MakeDiary' component={MakeDiary} />
          <Stack.Screen name='MakeTodo' component={MakeTodo} />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.backGround
  }
})

export default App;
