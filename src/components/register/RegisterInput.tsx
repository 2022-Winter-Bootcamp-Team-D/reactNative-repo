import React from "react";
import {View, Image, Text} from 'react-native';
import { TextInput } from "react-native-gesture-handler";
import RegisterStyles from '../../styles/RegisterStyles';

function RegisterInput() {
    return (
        <View>
            <TextInput
                style={RegisterStyles.RegisterInput}
                placeholder="이름"
            />
            <TextInput 
                style={RegisterStyles.RegisterInput}
                placeholder="전화번호"
            />
        </View>
    );  
};

export default RegisterInput;