import React, {useState} from "react";
import {View, Text, TextInput} from 'react-native';
import ReservationStyles from "../../styles/ReservationStyles";
import ReservationScreenStyles from "../../styles/screens/ReservationScreenStyles";

interface Props {
    setPassword: React.Dispatch<React.SetStateAction<string>>;
}

function PasswordInput({setPassword}:Props) {

    return (
        <View style={ReservationScreenStyles.PasswordInput}>
            <Text style={ReservationStyles.peopleTitle}>
                비밀번호 입력 (4자리)
            </Text>
            <View>
                <TextInput
                    style={ReservationStyles.PasswordInput}
                    placeholder="웨이팅에 사용하실 비밀번호를 입력해주세요."
                    autoCapitalize="none"
                    autoCorrect={false}
                    textContentType="newPassword"
                    secureTextEntry
                    maxLength={4}
                    onChangeText={password => setPassword(password)}
                />
            </View>
        </View>
    );  
};

export default PasswordInput;