import React from "react";
import {View, Text} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import StatusListStyles from'../../styles/StatusStyles'

function ListTitle() {
    return (
        <View style={StatusListStyles.listTitle}>
            <Text style={StatusListStyles.listTitleText}>
                홍길동님의 대기 현황
            </Text>
        </View>
    );
};

export default ListTitle;