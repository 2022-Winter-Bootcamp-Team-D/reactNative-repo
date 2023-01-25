import React from "react";
import {View, Image, Text} from 'react-native';
import LoginStyles from '../../styles/LoginStyles';
import LoginScreenStyles from "../../styles/screens/LoginScreenStyles";


function Logo() {
    return (
        <View style={LoginScreenStyles.logo}>
            <Image 
                style={LoginStyles.logoImage}
                source={require('../../../assets/images/LogoImage.png')}
                resizeMode='cover'
            />
            <Text style={LoginStyles.logoText}>
                Waiter
            </Text>
        </View>
    );  
};

export default Logo;