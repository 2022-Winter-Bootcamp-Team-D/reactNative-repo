import React from 'react';
import {TouchableOpacity} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import mapStyles from '../../styles/MapStyles';

function ActivatedMark() {
    return (
        <TouchableOpacity
            style={mapStyles.activateIcon}
        >
            <FontAwesomeIcon 
                name = 'map-pin' 
                size = {40} 
                color = '#0eba39'
            />
        </TouchableOpacity>
    );
};

export default ActivatedMark;