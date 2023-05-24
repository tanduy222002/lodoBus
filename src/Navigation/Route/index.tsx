import FindRoute from '@/Screens/Home/FindRoute';
import  ListRoute  from '@/Screens/Home/ListRoute';
import RouteDetail from '@/Screens/Home/RouteDetail';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tab = createNativeStackNavigator();

export const RouteNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="FindRoute" component={FindRoute} />
      <Tab.Screen name="ListRoute" component={ListRoute} />
      <Tab.Screen name="RouteDetail" component={RouteDetail} />
    </Tab.Navigator>
  );
}
