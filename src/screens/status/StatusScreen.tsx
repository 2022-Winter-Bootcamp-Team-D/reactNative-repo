import React from "react";
import {View, Text} from 'react-native';
import StatusDelayButton from "../../components/status/StatusDelayButton";
import ReceiptContent from "../../components/status/ReceiptContent";
import StatusCancelButton from "../../components/status/StatusCancelButton";
import StatusStyles from "../../styles/StatusStyles";
import ReservationScreenStyles from "../../styles/screens/ReservationScreenStyles";
import ListContent from "../../components/status/ListContent";


function StatusScreen() {
    return (
      <View style={ReservationScreenStyles.container}>
        <ListContent/>
        <ReceiptContent/>
          <View style={StatusStyles.ButtonContainer}>
            <StatusDelayButton/>
            <StatusCancelButton/>
          </View>
      </View>
    );
};

export default StatusScreen;