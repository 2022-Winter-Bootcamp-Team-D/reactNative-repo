import React from "react";
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../RootStackParams';
import InquiryStyles from "../../styles/InquiryStyles";
import InquiryScreenStyles from "../../styles/screens/InquiryScreenStyles";
import Logo from'../../components/inquiry/Logo'
import InquiryInput from '../../components/inquiry/InquiryInput'

type ResgisterScreenProp = StackNavigationProp<RootStackParamList, 'Inquiry'>;

function InquiryScreen() {
    const navigation = useNavigation<ResgisterScreenProp>();

    return (
        <View style={InquiryScreenStyles.container}>
            <Logo/>
            <InquiryInput/>
                <TouchableOpacity
                style={InquiryStyles.inquiryButton}
                onPress={() => navigation.navigate('Status')}
                >
                    <Text style={InquiryStyles.inquiryButtonText}>
                        대기 현황 조회
                    </Text>
                </TouchableOpacity>
            </View>
    );
};

export default InquiryScreen;