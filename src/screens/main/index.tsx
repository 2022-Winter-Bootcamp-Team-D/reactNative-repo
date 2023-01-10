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
        name = '지도'
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
        name = '웨이팅' 
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
        name = '검색'
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