import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {useAppSelector} from './src/redux/hooks';
import {RootState, store} from './src/redux/store';
import LoginScreen from './src/screens/LoginScreen';
import LogoutScreen from './src/screens/LogoutScreen';

type RootStackParamList = {
  Login: undefined;
  Logout: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  const isLoggedIn = useAppSelector(
    (state: RootState) => state.auth.isLoggedIn,
  );

  return (
    <SafeAreaView style={styles.screen}>
      <NavigationContainer>
        <RootStack.Navigator initialRouteName="Login">
          {isLoggedIn ? (
            <RootStack.Screen name="Logout" component={LogoutScreen} />
          ) : (
            <RootStack.Screen name="Login" component={LoginScreen} />
          )}
        </RootStack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    alignSelf: 'stretch',
    flex: 1,
  },
});

export default App;
