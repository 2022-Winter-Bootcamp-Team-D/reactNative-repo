import React from 'react';
import {TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import mapStyles from '../../styles/MapStyles';

function UnActivatedMark() {
    return (
        <TouchableOpacity
            style={mapStyles.unactivateIcon}
        >
            <FontAwesome 
                name = 'map-pin' 
                size = {40} 
                color = '#909090'
            />
        </TouchableOpacity>
    );
};

export default UnActivatedMark;