import { Home } from "./Home";
import React, { useState, useEffect } from "react";
import { useLazyGetUserQuery } from "@/Services";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FindRoute from "./FindRoute";
import ListRoute from "./ListRoute";
import RouteDetail from "./RouteDetail";
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
    <Stack.Navigator screenOptions={{headerShown: true, headerTitleAlign:'center'}}>
    <Stack.Screen name="FindRoute" component={FindRoute} />
    <Stack.Screen name="ListRoute" component={ListRoute}/>
    <Stack.Screen name="RouteDetail" component={RouteDetail}/>
    </Stack.Navigator>
  );
};
