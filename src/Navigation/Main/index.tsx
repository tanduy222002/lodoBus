import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeContainer } from "@/Screens/Home";
import {LeftBehindContainer} from "@/Screens/LeftBehindItem"
import { FavouriteRouteContainer } from "@/Screens/FavouriteRoute";
import { NotificationContainer } from "@/Screens/Notification";
import { UserContainer } from "@/Screens/User";
import { default as IoniconsIcon } from 'react-native-vector-icons/Ionicons'
import { default as AntDesign } from 'react-native-vector-icons/AntDesign'
const Tab = createBottomTabNavigator();

// @refresh reset
export const MainNavigator = () => {
  return (
    <Tab.Navigator 

      screenOptions={{
      tabBarStyle: { 
        position: 'absolute',
        backgroundColor:'#4C568F',
        height:'10%',

       },
    }}>
      <Tab.Screen
        name="Home"
        component={HomeContainer}
        options={{
          tabBarShowLabel:false,
          tabBarIcon:() => (
            <IoniconsIcon name='bus-outline' size={35} />
          ),

        }}
      />
      <Tab.Screen
        name="LeftBehindItem"
        component={LeftBehindContainer}
        options={{
          tabBarShowLabel:false,
          tabBarIcon:() => (
            <IoniconsIcon name='search' size={35} />
          ),
        }}
      />
      <Tab.Screen
        name="FavouriteRoute"
        component={FavouriteRouteContainer}
        options={{
          tabBarShowLabel:false,
          tabBarIcon:() => (
            <IoniconsIcon name='heart-circle-outline' size={45}/>
          ),
        }}
      />
       <Tab.Screen
        name="Notification"
        component={NotificationContainer}
        options={{
          tabBarShowLabel:false,
          tabBarIcon:() => (
            <IoniconsIcon name='ios-notifications-outline' size={35} />
          ),
        }}
      />
       <Tab.Screen
        name="User"
        component={UserContainer}
        options={{
          tabBarShowLabel:false,
          tabBarIcon:() => (
            <AntDesign name='user' size={35} />
          ),
        }}
      />
     
    </Tab.Navigator>
  );
};
