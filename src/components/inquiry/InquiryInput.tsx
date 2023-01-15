import React from "react";
import {View, TextInput} from 'react-native';
import InquiryStyles from "../../styles/InquiryStyles";

interface Props {
    setPassword: React.Dispatch<React.SetStateAction<string>>;
    setPhoneNum: React.Dispatch<React.SetStateAction<string>>;
}

function InquiryInput({setPassword, setPhoneNum}:Props) {

    return(
        <View>
            <TextInput
                style={InquiryStyles.RegisterInput}
                placeholder="전화번호"
                onChangeText={phoneNum => setPhoneNum(phoneNum)}
            />
            <TextInput
                style={InquiryStyles.RegisterInput}
                placeholder="비밀번호(4자리)"
                secureTextEntry //비밀번호 * 표시, 해제하려면 ={false}입력
                maxLength={4}
                onChangeText={password => setPassword(password)}
            />
        </View>
    );
}

export default InquiryInput;