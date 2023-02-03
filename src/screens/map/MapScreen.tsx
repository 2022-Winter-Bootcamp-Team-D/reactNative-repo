import React from "react";
import {View, Text} from 'react-native';
import MapView from "../../components/map/MapView";
import mapScreenStyles from '../../styles/screens/MapScreenStyles';

function MapScreen() {
    return (
      <View style={mapScreenStyles.container}>
        <MapView/>
      </View>
    );
};

export default MapScreen;