import React from "react";
import {View, TouchableOpacity, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../screens/RootStackParams';
import RegisterStyles from '../../styles/RegisterStyles';

type ResgisterScreenProp = StackNavigationProp<RootStackParamList, 'Register'>;

function SignupButton() {
    const navigation = useNavigation<ResgisterScreenProp>();
    
    return (
        <View >
            <TouchableOpacity
                    style={RegisterStyles.inquiryButton}
                    onPress={() => {
                        navigation.navigate('Signup')
                    }}
                >
                    <Text style={RegisterStyles.registerButtonText}>
                        회원가입
                    </Text>
                </TouchableOpacity>
        </View>
    );  
};

export default SignupButton;