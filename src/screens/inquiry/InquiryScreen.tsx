import React from "react";
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../RootStackParams';
import InquiryStyles from "../../styles/InquiryStyles";
import InquiryScreenStyles from "../../styles/screens/InquiryScreenStyles";
import Logo from'../../components/inquiry/Logo'
//import RegisterStyles from "../../styles/InquiryStyles"; // 얘를 지우면 11행에서 왜 오류가 발생하나요?
import InquiryInput from '../../components/inquiry/InquiryInput'

type ResgisterScreenProp = StackNavigationProp<RootStackParamList, 'Inquiry'>;

function InquiryScreen() {
    const navigation = useNavigation<ResgisterScreenProp>();

    return (
        <View style={InquiryScreenStyles.container}>
            <Logo/>
            <InquiryInput/>
        </View>
    );
};

export default InquiryScreen;