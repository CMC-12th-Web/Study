import * as React from 'react';
import {Dispatch, SetStateAction, useState, useEffect} from 'react';
import {Text, View} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

import Login from './src/screen/Login';
import Home from './src/screen/Home';
import Chatting from './src/screen/Chatting';
import Profile from './src/screen/Profile';
import Chat from './src/screen/Chat';
import Detail from './src/screen/Detail';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  // const [login, setLogin] = useState(null);
  const [login, setLogin] = useState(null);

  useEffect(() => {
  }, []);

  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <StackNavigator login={login} setLogin={setLogin} />
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

const StackNavigator = ({login, setLogin}) => {

  return (
  <Stack.Navigator
    initialRouteName="Home">
    {/* {login === null?
      <Stack.Screen 
        name="Login" 
        children={() => <Login setLogin={setLogin} />}
        options={{tabBarStyle: {display: 'none'}, headerShown: false, }} 
      />: */}
      <>
        <Stack.Screen
          name="Home"
          children={()=><TabNavigator setLogin={setLogin} />}
          options={{tabBarStyle: {display: 'none'}, headerShown: false, }}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{tabBarStyle: {display: 'none'}, headerShown: false, }}
        />
        <Stack.Screen
          name="Chatting"
          component={Chatting}
          options={{tabBarStyle: {display: 'none'}, }}
        />
      </>
    {/* } */}
    {/* <Stack.Screen name="Search" component={Search} /> */}
    {/* <Stack.Screen name="Message" component={Message} /> */}
  </Stack.Navigator>
  );
}

const TabNavigator = ({ setLogin }) => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="홈"
        component={Home}
        options={{
          // headerShown: false,

          tabBarIcon: ({color}) => (
            <Icon name={"home"} size={25} color={color} />
          ),
          unmountOnBlur: true,
        }}
      />
      <Tab.Screen
        name="채팅"
        component={Chat}
        options={{
          // headerShown: false,

          tabBarIcon: ({color}) => (
            <Icon name={"search"} size={25} color={color} />
          ),
          unmountOnBlur: true,
        }}
      />
      <Tab.Screen
        name="프로필"
        children={() => <Profile setLogin={setLogin} />}
        options={{
          // headerShown: false,

          tabBarIcon: ({color}) => (
            <Icon name={"chatbox-ellipses"} size={25} color={color} />
          ),
          unmountOnBlur: true,
        }}
      />
    </Tab.Navigator>
  );
}