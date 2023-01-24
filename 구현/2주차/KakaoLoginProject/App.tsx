import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BeforeLogin from './pages/BeforeLogin';
import AfterLogin from './pages/AfterLogIn';
import {RootStackParamList} from './types/type';
import {Screens} from './types/type';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const App: React.FunctionComponent = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="BeforeLogin">
        <RootStack.Screen name={Screens.BeforeLogin} component={BeforeLogin} />
        <RootStack.Screen name={Screens.AfterLogin} component={AfterLogin} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
