import React from "react";
import {View, Image, Text} from 'react-native';
import RegisterStyles from '../../styles/RegisterStyles';
import RegisterScreenStyles from "../../styles/screens/RegisterScreenStyles";


function Logo() {
    return (
        <View style={RegisterScreenStyles.logo}>
            <Image 
                style={RegisterStyles.logoImage}
                source={require('../../../assets/images/LogoImage.png')}
                resizeMode='cover'
            />
            <Text style={RegisterStyles.logoText}>
                Waiter
            </Text>
        </View>
    );  
};

export default Logo;