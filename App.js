/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from 'react';

import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Done from './src/screens/Done';
import Todos from './src/screens/Todos';
import ListContext from './src/context/ListContext';
import { TasksIcon, DoneIcon } from './src/svgs';


//navigations
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {

  return (

    <ListContext>

      <NavigationContainer>
        <Tab.Navigator screenOptions={({ route }) => ({
          tabBarLabel: ({ focused }) => (
            <Text style={{ fontSize: 16, fontWeight: "600" ,color:focused?"#0080ff":"black" }}>
              {route.name}
            </Text>
          )
        })}>

          <Tab.Screen name="My Tasks" component={Todos} options={{
            tabBarIcon: () => (
              <TasksIcon size={25} />
            ),
          }} />
          <Tab.Screen name="Done" component={Done} options={{
            tabBarIcon: () => (
              <DoneIcon size={35} />
            ),
          }} />

        </Tab.Navigator>
      </NavigationContainer>

    </ListContext>
  );
};



export default App;
