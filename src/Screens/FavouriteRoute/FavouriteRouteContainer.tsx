import { FavouriteRoute } from "./FavouriteRoute"
import React, { useState, useEffect } from "react";
import { useLazyGetUserQuery } from "@/Services";

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RouteDetail from "../Home/RouteDetail";
import { List } from "native-base";
const Stack = createNativeStackNavigator();
export const FavouriteRouteContainer = () => {
  const [userId, setUserId] = useState("9");

  const [fetchOne, { data, isSuccess, isLoading, isFetching, error }] =
    useLazyGetUserQuery();

  useEffect(() => {
    fetchOne(userId);
  }, [fetchOne, userId]);

  return (
    <Stack.Navigator screenOptions={{headerShown: true, headerTitleAlign:'center'}}>
      <Stack.Screen name="FavRoute" component={FavouriteRoute} options={{title: 'CHUYẾN YÊU THÍCH'}}/>
      <Stack.Screen name="RouteDetail" component={RouteDetail} options={{title: ''}}/>
    </Stack.Navigator>
  );
};
