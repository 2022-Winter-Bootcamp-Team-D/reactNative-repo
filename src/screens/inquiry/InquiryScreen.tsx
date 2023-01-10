import React from "react";
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../RootStackParams';
import RegisterStyles from "../../styles/RegisterStyles";
import Logo from "../../components/register/Logo";

type ResgisterScreenProp = StackNavigationProp<RootStackParamList, 'Inquiry'>;

function InquiryScreen() {
    const navigation = useNavigation<ResgisterScreenProp>();

    return (
        <View style={RegisterStyles.container}>
            <Logo/>
            <Button title="대기 현황 조회" onPress={() => navigation.navigate('Status')} />
        </View>
    );
};

export default InquiryScreen;