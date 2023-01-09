import React from "react";
import {View, Text} from 'react-native';
import MapTitle from "../../components/map/MapTitle";
import MyPosition from "../../components/map/MyPosition";
import mapScreenStyles from '../../styles/screens/MapScreenStyles';

function MapScreen() {
    return (
      <View style={mapScreenStyles.container}>
        <View>
          <MapTitle/>
        </View>
        <View>
          <MyPosition/>
        </View>
        <View style={mapScreenStyles.container}/>

      </View>
    );
};

export default MapScreen;