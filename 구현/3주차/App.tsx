import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTab from './src/components/BottomTab';
import StoryDetail from './src/pages/StoryDetail';
const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='root' screenOptions={{headerShown: false}}>
        <Stack.Screen name='root' component={BottomTab} />
        <Stack.Screen name='storyDetail' component={StoryDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
