import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../pages/Home';
import MyPage from '../pages/MyPage';
import Place from '../pages/Place';
import Search from '../pages/Search';
import Story from '../pages/Story';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="홈" component={Home} />
      <Tab.Screen name="스토리" component={Story} />
      <Tab.Screen name="검색" component={Search} />
      <Tab.Screen name="내주변" component={Place} />
      <Tab.Screen name="마이페이지" component={MyPage} />
    </Tab.Navigator>
  );
}

export default BottomTab;