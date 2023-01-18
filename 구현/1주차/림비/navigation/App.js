import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomNavigation from './src/BottomNavigation';
import Detail from './src/routes/Detail';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="root" component={BottomNavigation} options={{headerShown: false}}/>
        <Stack.Screen name="Detail" component={Detail} options={{
          title: '상세보기',
          headerBackTitle: 'Back',
          tabBarStyle: {display: 'none'}
        }} /> 
      </Stack.Navigator>
    </NavigationContainer >
  )
};

export default App;
