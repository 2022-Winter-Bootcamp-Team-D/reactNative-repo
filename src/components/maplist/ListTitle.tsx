import React from "react";
import {View, Text} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import mapListStyles from '../../styles/MapListStyles';
import mapStyles from "../../styles/MapStyles";

function ListTitle() {
    const store_name = "트리아농";
    const waiting_order = "대기 3팀";
    const store_distance = "528m";
    const store_detail = "제주산 청정 생고기로 만든 추억의 돈까스!";

    return (
        <View style={mapListStyles.listTitle}>
            <Text style={mapListStyles.number}>
                1
            </Text>
            <Text style={mapStyles.storeNameText}>
                {store_name}
            </Text>
            <Text style={mapListStyles.waitingText}>
                {waiting_order}
            </Text>
            <Text style={mapListStyles.storeDistanceText}>
                {store_distance}
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