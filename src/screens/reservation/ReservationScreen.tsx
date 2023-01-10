import React from "react";
import {View} from 'react-native';
import ReservationTitle from "../../components/reservation/ReservationTitle";
import StoreTitle from "../../components/reservation/StoreTitle";
import RegisterStyles from "../../styles/RegisterStyles";
import ReservationScreenStyles from "../../styles/screens/ReservationScreenStyles";

function ReservationScreen() {
  return (
    <View style={ReservationScreenStyles.container}>
      <ReservationTitle/>
      <StoreTitle/>
      
    </View>
  );
};

export default ReservationScreen;