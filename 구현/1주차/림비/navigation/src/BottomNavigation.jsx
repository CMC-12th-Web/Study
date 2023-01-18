import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from './routes/Home';
import Notification from './routes/Notification';
import Search from './routes/Search';
import Message from './routes/Message';
import Detail from './routes/Detail';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

function BottomNavigation() {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
            color = focused ? '#047FFD' : '#808080';
          } else if (route.name === 'Notification') {
            iconName = focused ? 'notifications' : 'ios-notifications-outline';
            color = focused ? '#047FFD' : '#808080';
          } else if (route.name === 'Search') {
            iconName = focused ? 'ios-search' : 'ios-search';
            color = focused ? '#047FFD' : '#808080';
          } else if (route.name === 'Message') {
            iconName = focused ? 'ios-chatbox-ellipses' : 'ios-chatbox-ellipses-outline';
            color = focused ? '#047FFD' : '#808080';
          }
          return <Icon name={iconName} size={24} color={color}/>;
      }})}>
      <Tab.Screen options={{ title: '홈' }} name="Home" component={Home}></Tab.Screen>
      <Tab.Screen options={{ title: '알림' }} name="Notification" component={Notification} />
      <Tab.Screen options={{ title: '검색' }} name="Search" component={Search} />
      <Tab.Screen options={{ title: '메시지' }} name="Message" component={Message} />
    </ Tab.Navigator>
      )
}

export default BottomNavigation;