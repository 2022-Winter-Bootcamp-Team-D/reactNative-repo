import React from "react";
import {View, Image} from 'react-native';
import mapStyles from '../../styles/MapStyles';

function MapView() {
    return (
        <View style={mapStyles.mapView}>
            <Image style={mapStyles.image}
            source={require('../../../assets/images/Map.jpeg')}
            resizeMode='cover'/>
        </View>
    );  
};

export default MapView;