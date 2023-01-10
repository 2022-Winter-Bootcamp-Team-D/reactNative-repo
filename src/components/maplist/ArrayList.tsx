import React from "react";
import {View, Text} from 'react-native';
import mapListStyles from '../../styles/MapListStyles';

function ArrayList() {
    return (
        <Text style={mapListStyles.arrayList}>
            정렬: 거리 순
        </Text>
    );
};

export default ArrayList;