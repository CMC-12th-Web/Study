/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HomeScreen from './components/HomeScreen';
import DetailScreen from './components/DetailScreen';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

function HomeButton() {
  return <View />;
}

function SearchButton() {
  return <View />;
}

function NotificationButton() {
  return <View />;
}

function MessageButton() {
  return <View />;
}

const App = () => {
  const [onDetail, setOnDetail] = useState(false);

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            children={({navigation}) => (
              <HomeScreen setOnDetail={setOnDetail} navigation={navigation} />
            )}
          />
          <Stack.Screen
            name="Detail"
            children={({navigation}) => (
              <DetailScreen setOnDetail={setOnDetail} navigation={navigation} />
            )}
          />
        </Stack.Navigator>
      </NavigationContainer>
      {!onDetail && (
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
              tabBarLabelPosition: 'below-icon',
              headerShown: false,
            }}>
            <Tab.Screen
              name="Home"
              component={HomeButton}
              options={{
                title: '홈',
                tabBarIcon: ({color, size}) => (
                  <Icon name="home" color={color} size={size} />
                ),
              }}
            />
            <Tab.Screen
              name="Search"
              component={SearchButton}
              options={{
                title: '검색',
                tabBarIcon: ({color, size}) => (
                  <Icon name="search" color={color} size={size} />
                ),
              }}
            />
            <Tab.Screen
              name="Notification"
              component={NotificationButton}
              options={{
                title: '알림',
                headerShown: false,
                tabBarIcon: ({color, size}) => (
                  <Icon name="notifications" size={size} color={color} />
                ),
              }}
            />
            <Tab.Screen
              name="Message"
              component={MessageButton}
              options={{
                title: '메시지',
                headerShown: false,
                tabBarIcon: ({color, size}) => (
                  <Icon name="message" size={size} color={color} />
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      )}
    </>
  );
};

export default App;
