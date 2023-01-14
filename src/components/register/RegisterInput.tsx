import React, {useState} from "react";
import {View} from 'react-native';
import { TextInput } from "react-native-gesture-handler";
import RegisterStyles from '../../styles/RegisterStyles';

interface Props {
    setName: React.Dispatch<React.SetStateAction<string>>;
    setPhoneNum: React.Dispatch<React.SetStateAction<string>>;
  }

function RegisterInput({setName, setPhoneNum}:Props) {

    return (
        <View>
            <TextInput
                style={RegisterStyles.RegisterInput}
                placeholder="이름"
                onChangeText={(name) => {setName(name)}}
            />
            <TextInput 
                style={RegisterStyles.RegisterInput}
                placeholder="전화번호"
                onChangeText={(phoneNum) => {setPhoneNum(phoneNum)}}
            />
        </View>
    );  
};

export default RegisterInput;