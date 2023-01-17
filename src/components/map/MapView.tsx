import React from "react";
import {View, Image} from 'react-native';
import mapStyles from '../../styles/MapStyles';
import{WebView}from "react-native-webview";

function MapView() {
    return (
        <View style={mapStyles.mapView}>
            <WebView
            source={{uri:"http://webview-domain/app/map"}}
            />
            {/* <Image style={mapStyles.image}
            source={require('../../../assets/images/Map.jpeg')}
            resizeMode='cover'/> */}
        </View>
    );  
};

export default MapView;