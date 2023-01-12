import React from "react";
import {View, Text} from 'react-native';
import StatusListStyles from'../../styles/StatusListStyles'

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