import React from "react";
import {View, Text} from 'react-native';
import ActivatedMark from "../../components/map/ActivatedMark";
import MapView from "../../components/map/MapView";
import MyPosition from "../../components/map/MyPosition";
import MapListButton from "../../components/map/MapListButton";
import UnActivatedMark from "../../components/map/UnActivatedMark";
import mapScreenStyles from '../../styles/screens/MapScreenStyles';

function MapScreen() {
    return (
      <View style={mapScreenStyles.container}>
        <MapView/>
      </View>
    );
};

export default MapScreen;