import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Chat from '../pages/Chat';

const Tab = createBottomTabNavigator();

function BottomNavigation() {
  const iconNameObj = {
    'Home': 'home',
    'Chat': 'chatbubbles',
    'Login': 'person'
  }
  const getTabBarIcon = (name, focused) => {
    let iconName;
    let iconColor;

    if (focused) {
      iconName = `${iconNameObj[name]}`;
      iconColor = '#000000';
    } else {
      iconName = `${iconNameObj[name]}-outline`;
      iconColor = '#808080';
    }
    return { iconName, iconColor };
  }

  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#000000',
        tabBarIcon: ({ focused, color }) => {
          let name = route.name;
          let { iconName, iconColor } = getTabBarIcon(name, focused)
          return <Icon name={iconName} size={22} color={iconColor}/>;
      }})} >
      <Tab.Screen options={{ title: '홈' }} name='Home' component={Home} />
      <Tab.Screen options={{ title: '채팅' }} name='Chat' component={Chat} />
      <Tab.Screen options={{title: '로그인' }} name='Login' component={Login} />
    </Tab.Navigator>
  )
}

export default BottomNavigation;