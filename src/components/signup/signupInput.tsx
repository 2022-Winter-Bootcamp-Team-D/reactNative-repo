import React, {useState} from "react";
import {View} from 'react-native';
import { TextInput } from "react-native-gesture-handler";
import RegisterStyles from '../../styles/RegisterStyles';

interface Props {
    setName: React.Dispatch<React.SetStateAction<string>>;
    setId: React.Dispatch<React.SetStateAction<string>>;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
    setCheck: React.Dispatch<React.SetStateAction<string>>;
    setPhoneNum: React.Dispatch<React.SetStateAction<string>>;
}

function SignupInput({setName, setId, setPassword, setCheck, setPhoneNum}:Props) {

    return (
        <View>
            <TextInput
                style={RegisterStyles.RegisterInput}
                placeholder="이름"
                onChangeText={(name) => {setName(name)}}
            />
            <TextInput
                style={RegisterStyles.RegisterInput}
                placeholder="아이디"
                onChangeText={(id) => {setId(id)}}
            />
            <TextInput
                style={RegisterStyles.RegisterInput}
                placeholder="비밀번호"
                secureTextEntry
                onChangeText={(password) => {setPassword(password)}}
            />
            <TextInput
                style={RegisterStyles.RegisterInput}
                placeholder="비밀번호 확인"
                secureTextEntry
                onChangeText={(check) => {setCheck(check)}}
            />
            <TextInput 
                style={RegisterStyles.RegisterInput}
                placeholder="전화번호"
                onChangeText={(phoneNum) => {setPhoneNum(phoneNum)}}
            />
        </View>
    );  
};

export default SignupInput;