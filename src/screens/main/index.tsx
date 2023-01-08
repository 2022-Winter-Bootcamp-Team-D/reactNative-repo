import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MainBottomTabParamList} from './MainBottomTabParams';

import Icon from 'react-native-vector-icons/FontAwesome';

import MapScreen from '../map/MapScreen';
import StatusScreen from '../status/StatusScreen';
import SearchScreen from '../search/SearchScreen';

const BottomTab = createBottomTabNavigator<MainBottomTabParamList>();

function MainScreen() {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen 
        name = 'Map'
        component = {MapScreen} 
        options = {{
          headerShown: false,
          tabBarIcon: () => (
            <Icon 
              name = 'map'
              size = {30}
              color = 'black'
            />
          ),
        }}
      />
      <BottomTab.Screen 
        name = 'Status' 
        component = {StatusScreen} 
        options = {{
          headerShown: false,
          tabBarIcon: () => (
            <Icon 
              name = 'calendar'
              size = {30} 
              color = 'black'
            />
          ),
        }}
      />
      <BottomTab.Screen 
        name = 'Search'
        component = {SearchScreen} 
        options = {{
          headerShown: false,
          tabBarIcon: () => (
            <Icon 
              name = 'search'
              size = {30}
              color = 'black'
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

export default MainScreen;