import React from "react";
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../RootStackParams';
import InquiryStyles from "../../styles/InquiryStyles";
import InquiryScreenStyles from "../../styles/screens/InquiryScreenStyles";
import Logo from'../../components/inquiry/Logo'
import InquiryInput from '../../components/inquiry/InquiryInput'
import axios from "axios";
import AsyncStorage from "@react-native-community/async-storage";

type ResgisterScreenProp = StackNavigationProp<RootStackParamList, 'Inquiry'>;

function InquiryScreen() {
    const navigation = useNavigation<ResgisterScreenProp>();
    
    const data = {
        phoneNum: "01068935272",
	    password: 5678
    }
    
    async function getName() {
        axios(
        {
            url: 'http://3.34.68.226:8000/api/v1/waiting/',
            method: 'get',
            data: data,
            headers: {
                contentType: 'application/json'
            }
        })
          .then(function (response) {
            console.log(response);
            navigation.navigate('Status')
          })
          .catch(function (error) {
            console.log(error, data);
          });
    };
    return (
        <View style={InquiryScreenStyles.container}>
            <Logo/>
            <InquiryInput/>
            <TouchableOpacity
                style={InquiryStyles.inquiryButton}
                onPress={() => {
                    getName()
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