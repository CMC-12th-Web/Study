import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import FeedScreen from './FeedScreen';
import SearchScreen from './SearchScreen';
import UserScreen from './UserScreen';
import SearchHeader from '../../components/search/SearchHeader';

const Tab = createBottomTabNavigator();

function MainTab(props) {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{activeTintColor: '#fb8c00', showLabel: false}}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: '홈',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Community"
        component={FeedScreen}
        options={{
          title: '피드',
          tabBarIcon: ({color, size}) => (
            <Icon name="messenger-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          title: '검색',
          tabBarIcon: ({color, size}) => (
            <Icon name="search" color={color} size={size} />
          ),
          headerTitle: () => <SearchHeader />,
        }}
      />
      <Tab.Screen
        name="User"
        component={UserScreen}
        options={{
          title: '사용자',
          tabBarIcon: ({color, size}) => (
            <Icon name="person-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MainTab;
