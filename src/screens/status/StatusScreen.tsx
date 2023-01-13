import React from "react";
import {View, Text} from 'react-native';
import styles from '../../styles/screens/MapScreenStyles';
import StatusTitle from '../../components/status/StatusTitle';
import StatusList from '../../components/status/StatusList';
import ReceiptTitle from '../../components/status/ReceiptTitle';
import StatusDelayButton from "../../components/status/StatusDelayButton";
import ReceiptContent from "../../components/status/ReceiptContent";
import ReceiptList from "../../components/status/ReceiptList";
import StatusCancelButton from "../../components/status/StatusCancelButton";
import StatusStyles from "../../styles/StatusStyles";
import HomeButton from "../../components/status/HomeButton";
import ReservationScreenStyles from "../../styles/screens/ReservationScreenStyles";


function StatusScreen() {
    return (
      <View style={ReservationScreenStyles.container}>
        <StatusList/>
        <ReceiptList/>
          <View style={StatusStyles.ButtonContainer}>
            <StatusDelayButton/>
            <StatusCancelButton/>
          </View>
      </View>
    );
};

export default StatusScreen;