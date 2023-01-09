import React from "react";
import {View, Text} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import mapListStyles from '../../styles/MapListStyles';
import mapStyles from "../../styles/MapStyles";

function ListTitle() {
    return (
        <View style={mapListStyles.makeList}>
            <Text style={mapListStyles.number}>
                1
            </Text>
            <Text style={mapStyles.storeNameText}>
                트리아농
            </Text>
            <Text style={mapListStyles.waitingText}>
                대기 3팀
            </Text>
            <Text style={mapListStyles.storeDistanceText}>
                528m
            </Text>
            <View style={mapListStyles.hideDetail}>
                <FontAwesomeIcon 
                    name = 'chevron-down'
                    size = {20} 
                    color = 'gray'
                />
            </View>
        </View>
    );
};

export default ListTitle;