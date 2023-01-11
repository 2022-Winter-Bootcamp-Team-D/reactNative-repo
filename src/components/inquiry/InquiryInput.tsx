import React from "react";
import {View, Image, Text} from 'react-native';            // 꼭 3가지만 있어야하나요! 여기에 버튼 추가 가능한가요
import { TextInput } from "react-native-gesture-handler";  //이건 몽가요
import InquiryStyles from "../../styles/InquiryStyles";

function InquiryInput() {
    return(
        <View>
            <TextInput
                style={InquiryStyles.RegisterInput}
                placeholder="전화번호"
            />
            <TextInput
                style={InquiryStyles.RegisterInput}
                placeholder="비밀번호(4자리)"
            />
        </View>
    );
}

export default InquiryInput;