import React from "react";
import {View, Text} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import mapListStyles from '../../styles/MapListStyles';
import mapStyles from "../../styles/MapStyles";
import reservationStyles from "../../styles/ReservationStyles";

function ListTitle() {
    return (
        <View style={mapListStyles.listTitle}>
            <Text style={reservationStyles.storeNameText}>
                트리아농
            </Text>
            <Text style={reservationStyles.waitingText}>
                대기 3팀
            </Text>
            <Text style={reservationStyles.storeDistanceText}>
                528m
            </Text>
        </View>
    );
};

export default ListTitle;