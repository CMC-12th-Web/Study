import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Login from './routes/Login';
import Icon from 'react-native-vector-icons/Ionicons';
import TimeTable from './routes/TimeTable';

const Tab = createBottomTabNavigator();

function BottomNavigation(): JSX.Element {
  return (
    <Tab.Navigator
      initialRouteName='Login'
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName: string = '';
          if (route.name === 'Login') {
            iconName = focused ? 'person' : 'person-outline';
            color = focused ? '#047FFD' : '#808080';
          } else if (route.name === 'TimeTable') {
            iconName = focused ? 'list' : 'list-outline';
            color = focused ? '#047FFD' : '#808080';
          } 
          return <Icon name={iconName} size={24} color={color}/>;
      }})}>
      <Tab.Screen options={{ title: '로그인' }} name="Login" component={Login}/>
      <Tab.Screen options={{ title: '일정표' }} name="TimeTable" component={TimeTable} />
    </Tab.Navigator>
  );
}

export default BottomNavigation;