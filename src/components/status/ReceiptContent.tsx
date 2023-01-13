import React from "react";
import {View, Text} from 'react-native';
import StatusListStyles from'../../styles/StatusListStyles'

function ReceiptContent() {
    return (
        <View style={StatusListStyles.ReceiptContainer}>
            <View>
                <Text style={StatusListStyles.ReceiptContentTitle}>
                    식당명 {'\n'}{'\n'}
                    접수 인원 {'\n'}{'\n'}
                    접수 시간
                </Text>
            </View>
            <View >
                <Text style={StatusListStyles.ReceiptContentText}>
                    트리아농 {'\n'}{'\n'}
                    2명 {'\n'}{'\n'}
                    2022년 5월 20일 16:35:33
                </Text>
            </View>
        </View>
    );
};

export default ReceiptContent;