import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Todo from './pages/Todo';
import { color } from './common';
import Profile from './pages/Profile';
import { View } from 'react-native';
import Circle from './components/Circle';
const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  const IconOption = { 
    tabBarActiveBackgroundColor: color.backGround,
    tabBarInactiveBackgroundColor: color.backGround,
    tabBarIcon: ({focused}) => focused ? <Circle color={color.main} size={30} focused={color.sub} /> : <Circle color={color.main} size={30} />
  }

  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={{ tabBarShowLabel: false, headerShown: false, tabBarStyle: { borderTopColor: color.backGround } }}>
      <Tab.Screen options={{ title: 'Todo', ...IconOption}} name="Todo" component={Todo} />
      <Tab.Screen options={{ title: 'Profile', ...IconOption}} name="Profile" component={Profile} />
    </Tab.Navigator>
  )
}

export default BottomNavigation;