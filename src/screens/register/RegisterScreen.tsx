import React from "react";
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../RootStackParams';
import RegisterStyles from "../../styles/RegisterStyles";
import Logo from "../../components/register/Logo";
import RegisterInput from "../../components/register/RegisterInput";
import RegisterScreenStyles from "../../styles/screens/RegisterScreenStyles";
import { TouchableOpacity } from "react-native-gesture-handler";

type ResgisterScreenProp = StackNavigationProp<RootStackParamList, 'Register'>;

function RegisterScreen() {
    const navigation = useNavigation<ResgisterScreenProp>();

    return (
        <View style={RegisterStyles.container}>
            <Logo/>
            <RegisterInput/>
            <View style={RegisterScreenStyles.registerButton}>
                <TouchableOpacity
                    style={RegisterStyles.registerButton}
                    onPress={() => navigation.navigate('Main')}
                >
                     <Text style={RegisterStyles.registerButtonText}>
                        웨이팅 등록
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={RegisterStyles.inquiryButton}
                    onPress={() => navigation.navigate('Inquiry')}
                >
                    <Text style={RegisterStyles.inquiryButtonText}>
                        웨이팅 조회
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default RegisterScreen;