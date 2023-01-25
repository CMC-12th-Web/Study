import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import BottomNavigation from './src/components/BottomNavigation';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import Detail from './src/pages/Detail';
import ChatDetail from './src/pages/ChatDetail';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name='Main'
          component={BottomNavigation}
          options={{ headerShown: false }}
        />
        <Stack.Screen name='Detail' component={Detail} options={{
          title: ' ',
          headerTintColor: '#000000'
        }} />
        <Stack.Screen name='ChatDetail' component={ChatDetail} options={{
          title: '',
          headerTintColor: '#000000'
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
