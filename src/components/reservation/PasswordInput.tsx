import React from "react";
import {View, Text} from 'react-native';
import { TextInput } from "react-native-gesture-handler";
import ReservationStyles from "../../styles/ReservationStyles";
import ReservationScreenStyles from "../../styles/screens/ReservationScreenStyles";

function PasswordInput() {
    return (
        <View style={ReservationScreenStyles.PasswordInput}>
            <Text style={ReservationStyles.peopleTitle}>
                비밀번호 입력 (4자리)
            </Text>
            <TextInput
                style={ReservationStyles.PasswordInput}
                placeholder="웨이팅에 사용하실 비밀번호를 입력해주세요."
            />
        </View>
    );  
};

export default PasswordInput;