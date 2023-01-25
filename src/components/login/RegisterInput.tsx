import React from "react";
import {View} from 'react-native';
import { TextInput } from "react-native-gesture-handler";
import LoginStyles from '../../styles/LoginStyles';

interface Props {
    setName: React.Dispatch<React.SetStateAction<string>>;
    setPhoneNum: React.Dispatch<React.SetStateAction<string>>;
}

function RegisterInput({setName, setPhoneNum}:Props) {

    return (
        <View>
            <TextInput
                style={LoginStyles.RegisterInput}
                placeholder="이름"
                onChangeText={(name) => {setName(name)}}
            />
            <TextInput 
                style={LoginStyles.RegisterInput}
                placeholder="전화번호"
                onChangeText={(phoneNum) => {setPhoneNum(phoneNum)}}
            />
        </View>
    );  
};

export default RegisterInput;