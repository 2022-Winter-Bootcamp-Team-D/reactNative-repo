import React from "react";
import {View, Image, Text} from 'react-native';
import InquiryScreenStyles from '../../styles/screens/InquiryScreenStyles'
import InquiryStyles from '../../styles/InquiryStyles'

function Logo() {
    return (
        <View style={InquiryScreenStyles.logo}>
            <Image
                style={InquiryStyles.logoImage}
                source={require('../../../assets/images/LogoImage.png')}
                resizeMode='cover'
            />
            <Text style={InquiryStyles.logoText}>
                Waiter
            </Text>
        </View>
    );  
};

export default Logo;