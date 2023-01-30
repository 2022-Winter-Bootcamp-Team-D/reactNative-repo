import React from "react";
import {View} from 'react-native';
import { TextInput } from "react-native-gesture-handler";
import LoginStyles from '../../styles/LoginStyles';

interface Props {
    email: string
    password: string
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
}

function RegisterInput({email, password, setEmail, setPassword}:Props) {

    return (
        <View>
            <TextInput
                style={LoginStyles.RegisterInput}
                placeholder="이메일"
                value={email}
                onChangeText={(email) => {setEmail(email)}}
            />
            <TextInput 
                style={LoginStyles.RegisterInput}
                placeholder="비밀번호"
                value={password}
                secureTextEntry
                onChangeText={(password) => {setPassword(password)}}
            />
        </View>
    );  
};

export default RegisterInput;