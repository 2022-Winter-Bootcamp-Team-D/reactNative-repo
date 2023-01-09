import React from "react";
import {View, Text} from 'react-native';
import styles from '../../styles/screens/MapScreenStyles';

function StatusScreen() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>대기 현황</Text>
      </View>
    );
};

export default StatusScreen;