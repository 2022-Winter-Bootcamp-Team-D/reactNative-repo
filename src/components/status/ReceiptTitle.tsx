import React from "react";
import {View, Text} from 'react-native';
import StatusListStyles from'../../styles/StatusListStyles'

function ReceiptTitle() {
    return (
        <View style={StatusListStyles.listTitle}>
            <Text style={StatusListStyles.listTitleText}>
                식당 접수 내역
            </Text>
        </View>
    );
};

export default ReceiptTitle;