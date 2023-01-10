import React from "react";
import {View, Text, TouchableOpacity} from 'react-native';
import mapStyles from '../../styles/MapStyles';

function MyPosition() {
    return (
        <View style={mapStyles.positionContainer}>
            <Text style={mapStyles.myPosition}>
                내 위치
            </Text>
            <TouchableOpacity>
                <Text style={mapStyles.positionDetail}>
                    대한민국 서울시
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default MyPosition;