/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unstable-nested-components */


import React, { useState } from 'react';
// import { Text, View } from 'react-native';

import tw from 'twrnc';


//Icons
import { HomeIcon } from 'react-native-heroicons/outline';
import { StarIcon } from 'react-native-heroicons/outline';
import { HomeIcon as HomeIconSolid } from 'react-native-heroicons/solid';
import { StarIcon as StarIconSolid } from 'react-native-heroicons/solid';
import { RocketLaunchIcon } from 'react-native-heroicons/outline';
import { RocketLaunchIcon as RocketLaunchIconSolid } from 'react-native-heroicons/outline';

//Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Screens
import Discover from './screens/Discover';
import Home from './screens/home';
import pwRecovery from './screens/pwRecovery';
import SignIn from './screens/Signin';
import SignUp from './screens/Signup';
import TopRated from './screens/topRated';

// import { supabase } from './lib/supabase';

const RootStack = createNativeStackNavigator();
const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignIn"
        options={{
          headerShown: false,
        }}
        component={SignIn} />
      <Stack.Screen name="SignUp"
        options={{
          headerShown: false,
        }} component={SignUp} />
      <Stack.Screen name="pwRecovery"
        options={{
          headerShown: false,
        }} component={pwRecovery} />
    </Stack.Navigator>);
};

const HomeTabs = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          if (route.name === 'Home') {
            return focused ? (
              <HomeIconSolid color={tw.color('white')} size={20} />
            ) : (
              <HomeIcon color={tw.color('gray-400')} size={20} />
            );
          } else if (route.name === 'TopRated') {
            return focused ? (
              <StarIconSolid color={tw.color('white')} size={20} />
            ) : (
              <StarIcon color={tw.color('gray-400')} size={20} />
            );
          } else if (route.name === 'Discover') {
            return focused ? (
              <RocketLaunchIconSolid color={tw.color('white')} size={20} />
            ) : (
              <RocketLaunchIcon color={tw.color('gray-400')} size={20} />
            );
          }
        },
        tabBarLabelStyle: {
          marginTop: -10,
          marginBottom: 7,
        },
        tabBarStyle: {
          backgroundColor: 'black',
        },
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tabs.Screen
        name={'Home'}
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name={'TopRated'}
        component={TopRated}
        options={{
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name={'Discover'}
        component={Discover}
        options={{
          headerShown: false,
        }}
      />
    </Tabs.Navigator>
  );
};


function App() {
  const [user] = useState(true);
  // const [user, setUser] = useState(true);
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        {
          !user ? (
            <RootStack.Screen
              name={'Auth'}
              options={{
                headerShown: false,
              }}
              component={AuthNavigator} />
          ) : (
            <RootStack.Screen
              name={'HomeTabs'}
              options={{
                headerShown: false,
              }}
              component={HomeTabs} />
          )
        }
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
