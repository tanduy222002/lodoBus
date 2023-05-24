import { Home } from "./Home";
import React, { useState, useEffect } from "react";
import { useLazyGetUserQuery } from "@/Services";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FindRoute from "./FindRoute";
import ListRoute from "./ListRoute";
import RouteDetail from "./RouteDetail";
import StopSpot from "./StopSpot";
import { List } from "native-base";
const Stack = createNativeStackNavigator();
export const HomeContainer = () => {
  const [userId, setUserId] = useState("9");

  const [fetchOne, { data, isSuccess, isLoading, isFetching, error }] =
    useLazyGetUserQuery();

  useEffect(() => {
    fetchOne(userId);
  }, [fetchOne, userId]);

  return (
    <Stack.Navigator screenOptions={{headerShown: true, headerTitleAlign:'center', animationTypeForReplace:'pop'}}>
    <Stack.Screen name="FindRoute" component={FindRoute} />
    <Stack.Screen name="ListRoute" component={ListRoute} options={{title: 'TÌM CHUYẾN'}}/>
    <Stack.Screen options={{headerShown:false}} name="StopSpot" component={StopSpot}/>
    <Stack.Screen options={{headerShown:false}} name="RouteDetail" component={RouteDetail}/>
    </Stack.Navigator>
  );
};
