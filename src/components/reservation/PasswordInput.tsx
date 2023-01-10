import React from "react";
import {View, Image, Text} from 'react-native';
import { TextInput } from "react-native-gesture-handler";
import RegisterStyles from '../../styles/RegisterStyles';

function PasswordInput() {
    return (
        <View>
            <Text style={RegisterStyles.registerButtonText}>
                비밀번호 입력 (4자리)
            </Text>
            <TextInput
                style={RegisterStyles.RegisterInput}
                placeholder="사용하실 비밀번호를 입력해주세요."
            />
        </View>
    );  
};

export default PasswordInput;