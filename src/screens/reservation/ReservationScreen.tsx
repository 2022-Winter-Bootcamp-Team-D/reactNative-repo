import React from "react";
import {View} from 'react-native';
import ReservationTitle from "../../components/reservation/ReservationTitle";
import ReservationPeople from "../../components/reservation/ReservationPeople";
import PasswordInput from "../../components/reservation/PasswordInput";
import ReservationButton from "../../components/reservation/ReservationButton";
import CancelButton from "../../components/reservation/CancelButton";
import ReservationScreenStyles from "../../styles/screens/ReservationScreenStyles";
import SelectedStore from "../../components/reservation/SelectedStore";

function ReservationScreen() {
  return (
    <View style={ReservationScreenStyles.container}>
      <SelectedStore/>
      <ReservationPeople/>
      <PasswordInput/>
      <ReservationButton/>
      <CancelButton/>
    </View>
  );
};

export default ReservationScreen;