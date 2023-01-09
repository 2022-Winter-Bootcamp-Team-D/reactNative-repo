import React from "react";
import {View, Text} from 'react-native';
import ActivatedMark from "../../components/map/ActivatedMark";
import MapTitle from "../../components/map/MapTitle";
import MapView from "../../components/map/MapView";
import MyPosition from "../../components/map/MyPosition";
import StoreInformation from "../../components/map/StoreInformation";
import UnActivatedMark from "../../components/map/UnActivatedMark";
import mapScreenStyles from '../../styles/screens/MapScreenStyles';

function MapScreen() {
    return (
      <View style={mapScreenStyles.container}>
          <MapTitle/>
          <MyPosition/>
          <MapView/>
          <ActivatedMark/>
          <UnActivatedMark/>
          {/* <StoreInformation/> */}
      </View>
    );
};

export default MapScreen;