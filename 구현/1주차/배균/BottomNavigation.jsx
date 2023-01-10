import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Todo from './pages/Todo';
import { color } from './common';
import Profile from './pages/Profile';
import { StyleSheet, View } from 'react-native';
const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  const IconOption = { 
    tabBarActiveBackgroundColor: color.backGround,
    tabBarInactiveBackgroundColor: color.backGround,
    tabBarIcon: ({focused}) => focused ? <View style={[styles.circle, styles.focused]} /> : <View style={styles.circle} />
  }

  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={{ tabBarShowLabel: false, headerShown: false, tabBarStyle: { borderTopColor: color.backGround } }}>
      <Tab.Screen options={{ title: 'Todo', ...IconOption}} name="Todo" component={Todo} />
      <Tab.Screen options={{ title: 'Profile', ...IconOption}} name="Profile" component={Profile} />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  circle: {
    width: 30,
    height: 30,
    borderRadius: 100,
    backgroundColor: color.main
  },
  focused: {
    backgroundColor: color.sub
  }
})

export default BottomNavigation;