import React from 'react';
import {
  BottomTabScreenProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import HomeScreen from './HomeScreen';
import AlarmScreen from './AlarmScreen';
import SearchScreen from './SearchScreen';
import MessageScreen from './MessageScreen';

import type {RootStackParamList} from '../../App';

export type HomeTabParamList = {
  홈: undefined;
  알림: undefined;
  검색: undefined;
  메시지: undefined;
};

type Props = BottomTabScreenProps<RootStackParamList, '홈'>;

const HomeTab = createBottomTabNavigator<HomeTabParamList>();

const HomeTabScreen = ({navigation}: Props) => {
  return (
    <HomeTab.Navigator
      initialRouteName="홈"
      screenOptions={{headerShown: false}}>
      <HomeTab.Screen name="홈" component={HomeScreen} />
      <HomeTab.Screen name="알림" component={AlarmScreen} />
      <HomeTab.Screen name="검색" component={SearchScreen} />
      <HomeTab.Screen name="메시지" component={MessageScreen} />
    </HomeTab.Navigator>
  );
};

export default HomeTabScreen;
