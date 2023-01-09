import React from "react";
import {View, Text} from 'react-native';
import mapListStyles from '../../styles/MapListStyles';
import mapStyles from "../../styles/MapStyles";

function MapListScreen() {
    return (
        <View style={mapListStyles.makeList}>
            <Text style={mapListStyles.number}>
                1
            </Text>
            <Text style={mapStyles.storeNameText}>
                트리아농
            </Text>
            <Text style={mapStyles.storeDetailText}>
                대기 3팀
            </Text>
            <Text style={mapStyles.storeDistanceText}>
                528m
            </Text>
        </View>
    );
};

export default MapListScreen;