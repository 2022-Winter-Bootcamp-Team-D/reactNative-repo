import React from "react";
import {View, Text} from 'react-native';
import styles from '../../styles/screens/MapScreenStyles';
import StatusTitle from '../../components/status/StatusTitle';
//import StatusList from '../../components/status/StatusList';
//import StatusReceipt from '../../components/status/StatusReceipt';
import StatusDelayButton from '../../components/status/StatusDelayButton';
//import StatusCancelButton from '../../components/status/StatusCancelButton';

function StatusScreen() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <StatusTitle/>
        {/* <StatusList/>
        <StatusReceipt/> */}
        <StatusDelayButton/>
        {/* <StatusCancelButton/> */}
      </View>
    );
};

export default StatusScreen;