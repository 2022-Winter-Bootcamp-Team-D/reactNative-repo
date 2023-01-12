import React from "react";
import {View, Text} from 'react-native';
import StatusListStyles from'../../styles/StatusListStyles'

function ReceiptContent() {
    return (
        <View style={StatusListStyles.ReceiptContent}>
            <View>
                <Text style={StatusListStyles.ReceiptContentText}>
                    식당명
                </Text>
                <Text style={StatusListStyles.ReceiptContentText}>
                    트리아농
                </Text>
            </View>
            <View >
                <Text style={StatusListStyles.ReceiptContentText}>
                    접수 인원
                </Text>
                <Text style={StatusListStyles.ReceiptContentText}>
                    2명
                </Text>
            </View>
            <View >
                <Text style={StatusListStyles.ReceiptContentText}>
                    접수 시간
                </Text>
                <Text style={StatusListStyles.ReceiptContentText}>
                    2022년 5월 20일 16:35:33
                </Text>
            </View>
        </View>
    );
};

export default ReceiptContent;