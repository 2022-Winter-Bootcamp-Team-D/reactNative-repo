import React from "react";
import {View} from 'react-native';
import ReservationTitle from "../../components/reservation/ReservationTitle";
import StoreTitle from "../../components/reservation/StoreTitle";
import ReservationPeople from "../../components/reservation/ReservationPeople";
import PasswordInput from "../../components/reservation/PasswordInput";
import ReservationButton from "../../components/reservation/ReservationButton";
import CancelButton from "../../components/reservation/CancelButton";
import ReservationScreenStyles from "../../styles/screens/ReservationScreenStyles";

function ReservationScreen() {
  return (
    <View style={ReservationScreenStyles.container}>
      <ReservationTitle/>
      <StoreTitle/>
      <ReservationPeople/>
      <PasswordInput/>
      <ReservationButton/>
      <CancelButton/>
    </View>
  );
};

export default ReservationScreen;