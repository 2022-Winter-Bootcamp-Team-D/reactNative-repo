import React from "react";
import {View, Text} from 'react-native';
import styles from '../../styles/screens/MapScreenStyles';
import StatusTitle from '../../components/status/StatusTitle';
import StatusList from '../../components/status/StatusList';
import ReceiptTitle from '../../components/status/ReceiptTitle';
import StatusDelayButton from "../../components/status/StatusDelayButton";
import ReceiptContent from "../../components/status/ReceiptContent";


function StatusScreen() {
    return (
      <View style={{flex: 1}}>
        <StatusTitle/>
        <StatusList/>
        <ReceiptTitle/>
        <ReceiptContent/>
        <StatusDelayButton/>
        {/* <StatusCancelButton/> */}
      </View>
    );
};

export default StatusScreen;