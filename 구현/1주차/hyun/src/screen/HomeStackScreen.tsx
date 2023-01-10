import React, {useLayoutEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import DetailScreen from './DetailScreen';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import type {RootTabParamList} from '../../App';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

export type HomeStackParamList = {
  홈: undefined;
  디테일: undefined;
};

type Props = BottomTabScreenProps<RootTabParamList, '홈'>;

const HomeStack = createNativeStackNavigator<HomeStackParamList>();

const HomeStackScreen = ({navigation, route}: Props) => {
  useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName === '디테일') {
      navigation.setOptions({tabBarStyle: {display: 'none'}});
    } else {
      navigation.setOptions({tabBarStyle: {display: 'flex'}});
    }
  }, [navigation, route]);

  return (
    <HomeStack.Navigator initialRouteName="홈">
      <HomeStack.Screen name="홈" component={HomeScreen} />
      <HomeStack.Screen name="디테일" component={DetailScreen} />
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;
