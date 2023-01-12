import React from "react";
import {View, Text} from 'react-native';
import StatusListStyles from'../../styles/StatusListStyles'

function ListContent() {
    return (
        <View style={StatusListStyles.listContent}>
            <View>
                <Text style={StatusListStyles.listContentText}>
                    대기번호
                </Text>
                <Text style={StatusListStyles.listContentTextNumber}>
                    0037
                </Text>
            </View>
            <View >
                <Text style={StatusListStyles.listContentText}>
                    대기순서
                </Text>
                <Text style={StatusListStyles.listContentTextNumber}>
                    03
                </Text>
            </View>
            <Text style={StatusListStyles.listContentMessage}>
                    고객님의 차례가 다가오고 있습니다.
                    {"\n"}
                    지금 매장으로 오셔서 대기하여 주세요.
                </Text>
        </View>
    );
};

export default ListContent;