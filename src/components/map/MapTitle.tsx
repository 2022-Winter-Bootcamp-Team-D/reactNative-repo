import React from "react";
import {Text} from 'react-native';
import mapStyles from '../../styles/MapStyles';

function MapTitle() {
    return (
    <Text style={mapStyles.maptitle}>
        내 주변 매장
    </Text>
    );
};

export default MapTitle;