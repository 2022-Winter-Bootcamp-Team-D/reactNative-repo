import React, {useState} from "react";
import {View} from 'react-native';
import ReservationPeople from "../../components/reservation/ReservationPeople";
import PasswordInput from "../../components/reservation/PasswordInput";
import ReservationButton from "../../components/reservation/ReservationButton";
import CancelButton from "../../components/reservation/CancelButton";
import ReservationScreenStyles from "../../styles/screens/ReservationScreenStyles";
import SelectedStore from "../../components/reservation/SelectedStore";

function ReservationScreen() {
  const [password, setPassword] = useState('');

  return (
    <View style={ReservationScreenStyles.container}>
      <SelectedStore/>
      <ReservationPeople/>
      <PasswordInput
        setPassword={setPassword}
      />
      <ReservationButton
        password={password}/>
      <CancelButton/>
    </View>
  );
};

export default ReservationScreen;