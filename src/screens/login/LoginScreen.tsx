import React,{useState} from "react";
import {View, TouchableOpacity, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../RootStackParams';
import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-community/async-storage';
import LoginStyles from "../../styles/LoginStyles";
import Logo from "../../components/login/Logo";
import RegisterInput from "../../components/login/RegisterInput";
import LoginScreenStyles from "../../styles/screens/LoginScreenStyles";
import InquiryButton from "../../components/login/SignupButton";

type ResgisterScreenProp = StackNavigationProp<RootStackParamList, 'Login'>;

function RegisterScreen() {
    const navigation = useNavigation<ResgisterScreenProp>();
    const [name, setName] = useState('');
    const [phoneNum, setPhoneNum] = useState('');

    async function FCMToken() {
        // Register the device with FCM
        await messaging().registerDeviceForRemoteMessages();
        // Get the token
        const token = await messaging().getToken();
        // Save the token
        AsyncStorage.setItem('FCMtoken', token, () => { // 'token'의 변수로 토큰값 저장
        });
        console.log('[FCMtoken]' + token)
        return (token)
    }

    function userRegister(){
        console.log(name)
        console.log(phoneNum)
    }

    return (
        <View style={LoginScreenStyles.mainContainer}>
            <View style={LoginScreenStyles.registerContainer}>
                <Logo/>
                <RegisterInput
                    setName={setName}
                    setPhoneNum={setPhoneNum}
                />
                <View style={LoginScreenStyles.registerButton}>
                    <TouchableOpacity
                        style={LoginStyles.registerButton}
                        onPress={() => {
                            FCMToken()
                            userRegister()
                            navigation.navigate('Main');
                        }}
                    >
                        <Text style={LoginStyles.registerButtonText}>
                            로그인
                        </Text>
                    </TouchableOpacity>
                    <InquiryButton/>
                </View>
            </View>
        </View>
    );
};

export default RegisterScreen;