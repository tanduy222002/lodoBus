import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeContainer } from "@/Screens/Home";
import {LeftBehindContainer} from "@/Screens/LeftBehindItem"
import { FavouriteRouteContainer } from "@/Screens/FavouriteRoute";
import { NotificationContainer } from "@/Screens/Notification";
import { UserContainer } from "@/Screens/User";
import { default as IoniconsIcon } from 'react-native-vector-icons/Ionicons'
import { default as AntDesign } from 'react-native-vector-icons/AntDesign'
import { default as MaterialComunityIcon } from 'react-native-vector-icons/MaterialCommunityIcons'
import { color } from "native-base/lib/typescript/theme/styled-system";
const Tab = createBottomTabNavigator();

// @refresh reset
export const MainNavigator = () => {
  return (
    <Tab.Navigator 

      screenOptions={{
      tabBarStyle: { 
        // position: 'absolute',
        backgroundColor:'#4C568F',
        height:'10%',

       },
    }}>
      <Tab.Screen
        name="Home"
        component={HomeContainer}
        options={{
          headerShown:false,
          tabBarShowLabel:false,
          tabBarIcon:({focused}) => (
            <IoniconsIcon name='ios-bus' size={35} style={{color: focused ?  '#3e3e3b' : '#ffffff'}} />
          ),

        }}
      />
      <Tab.Screen
        name="LeftBehindItem"
        component={LeftBehindContainer}
        options={{
          headerShown:false,
          tabBarShowLabel:false,
          tabBarIcon:({focused}) => (
            <IoniconsIcon name='search' size={35} style={{color: focused ?  '#3e3e3b' : '#ffffff'}}/>
          ),
        }}
      />
      <Tab.Screen
        name="FavouriteRoute"
        component={FavouriteRouteContainer}
        options={{
          headerShown:false,
          tabBarShowLabel:false,
          tabBarIcon:({focused}) => (
            <MaterialComunityIcon name='heart-multiple-outline' size={35} style={{color: focused ?  '#3e3e3b' : '#ffffff'}}/>
          ),
        }}
      />
       <Tab.Screen
        name="Notification"
        
        component={NotificationContainer}
        options={{
          tabBarShowLabel:false,
          headerShown:false,
          tabBarIcon:({focused}) => (
            <IoniconsIcon name='ios-notifications' size={35} style={{color: focused ?  '#3e3e3b' : '#ffffff'}}/>
          ),
        }}
      />
       <Tab.Screen
        name="User"
        component={UserContainer}
        options={{
          headerShown:false,
          tabBarShowLabel:false,
          tabBarIcon:({focused}) => (
            <AntDesign name='user' size={35} style={{color: focused ?  '#3e3e3b' : '#ffffff'}}/>
          ),
        }}
      />
     
    </Tab.Navigator>
  );
};
