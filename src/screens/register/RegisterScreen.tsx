import React from "react";
import {View} from 'react-native';
import RegisterStyles from "../../styles/RegisterStyles";
import Logo from "../../components/register/Logo";
import RegisterInput from "../../components/register/RegisterInput";
import RegisterScreenStyles from "../../styles/screens/RegisterScreenStyles";
import RegisterButton from "../../components/register/RegisterButton";
import InquiryButton from "../../components/register/InquiryButton";

function RegisterScreen() {

    return (
        <View style={RegisterScreenStyles.container}>
            <Logo/>
            <RegisterInput/>
            <View style={RegisterScreenStyles.registerButton}>
                <RegisterButton/>
                <InquiryButton/>
            </View>
        </View>
    );
};

export default RegisterScreen;