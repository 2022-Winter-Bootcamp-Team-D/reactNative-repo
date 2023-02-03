import React, {useState} from "react";
import {View} from 'react-native';
import { TextInput } from "react-native-gesture-handler";
import RegisterStyles from '../../styles/LoginStyles';

interface Props {
    name: string
    phoneNum: string
    email: string
    password: string
    setName: React.Dispatch<React.SetStateAction<string>>;
    setPhoneNum: React.Dispatch<React.SetStateAction<string>>;
    setEamil: React.Dispatch<React.SetStateAction<string>>;
    setPassword: React.Dispatch<React.SetStateAction<string>>
}

function SignupInput({name, phoneNum, email, password, setName, setPhoneNum, setEamil, setPassword}:Props) {
    return (
        <View>
            <TextInput
                style={RegisterStyles.RegisterInput}
                placeholder="이름"
                value={name}
                onChangeText={(name) => {setName(name)}}
            />
            <TextInput 
                style={RegisterStyles.RegisterInput}
                placeholder="전화번호"
                value={phoneNum}
                onChangeText={(phoneNum) => {setPhoneNum(phoneNum)}}
            />
            <TextInput
                style={RegisterStyles.RegisterInput}
                placeholder="이메일"
                value={email}
                onChangeText={(email) => {setEamil(email)}}
            />
            <TextInput
                style={RegisterStyles.RegisterInput}
                placeholder="비밀번호"
                secureTextEntry
                value={password}
                onChangeText={(password) => {setPassword(password)}}
            />
            {/* <TextInput
                style={RegisterStyles.RegisterInput}
                placeholder="비밀번호 확인"
                secureTextEntry
                onChangeText={(check) => {setCheck(check)}}
            /> */}
        </View>
    );  
};

export default SignupInput;