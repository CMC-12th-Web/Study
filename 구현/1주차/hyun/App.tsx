import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AlarmScreen from './src/screen/AlarmScreen';
import SearchScreen from './src/screen/SearchScreen';
import MessageScreen from './src/screen/MessageScreen';
import {SafeAreaView, StyleSheet} from 'react-native';
import HomeStackScreen from './src/screen/HomeStackScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context';

export type RootTabParamList = {
  홈: undefined;
  알림: undefined;
  검색: undefined;
  메시지: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.screen}>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen
              name="홈"
              component={HomeStackScreen}
              options={{headerShown: false}}
            />
            <Tab.Screen name="알림" component={AlarmScreen} />
            <Tab.Screen name="검색" component={SearchScreen} />
            <Tab.Screen name="메시지" component={MessageScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignSelf: 'stretch',
  },
});

export default App;
