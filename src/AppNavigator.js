import 'react-native-gesture-handler';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from './Components';
import {TrackList, EventPage} from './connectors';
const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();
function StackNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EventPage"
        component={EventPage}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          showLabel: false,
          showIcon: false,
          style: {height: 0},
        }}
        springVelocityScale={1}>
        <Tab.Screen name="Home" component={StackNav} />
        <Tab.Screen name="TrackingList" component={TrackList} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default AppNavigator;
