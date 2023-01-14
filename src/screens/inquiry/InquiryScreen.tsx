import React from "react";
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../RootStackParams';
import InquiryStyles from "../../styles/InquiryStyles";
import InquiryScreenStyles from "../../styles/screens/InquiryScreenStyles";
import Logo from'../../components/inquiry/Logo'
import InquiryInput from '../../components/inquiry/InquiryInput'
import API from "../../services/API";

type ResgisterScreenProp = StackNavigationProp<RootStackParamList, 'Inquiry'>;

function InquiryScreen() {
    const navigation = useNavigation<ResgisterScreenProp>();
    
    // 보류
    const data = {
        phoneNum: "01012345678",
	    password: "5678"
    }

    async function postInquiryData() {
        try {
            const response = await API.post(
                '/waiting/list/',
                data
            )
          .then(function (response) {
            console.log(response.data);
            navigation.navigate('Status')
          })
          .catch(function (error) {
            console.log(error);
          });
        } catch (error) {
            console.log(error);
        }
    };
    
    return (
        <View style={InquiryScreenStyles.container}>
            <Logo/>
            <InquiryInput/>
            <TouchableOpacity
                style={InquiryStyles.inquiryButton}
                onPress={() => {
                    postInquiryData()
                }}
            >
                <Text style={InquiryStyles.inquiryButtonText}>
                    대기 현황 조회
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default InquiryScreen;