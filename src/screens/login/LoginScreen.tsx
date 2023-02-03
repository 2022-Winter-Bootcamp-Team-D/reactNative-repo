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
import API from "../../services/API";

type ResgisterScreenProp = StackNavigationProp<RootStackParamList, 'Login'>;

function LoginScreen() {
    const navigation = useNavigation<ResgisterScreenProp>();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function FCMToken() {
        // Register the device with FCM
        await messaging().registerDeviceForRemoteMessages();
        // Get the token
        const FCMToken = await messaging().getToken();
        // Save the token
        AsyncStorage.setItem('token', FCMToken, () => { // 'token'의 변수로 토큰값 저장
        });
        console.log('[FCMToken]' + FCMToken)
        return (FCMToken)
    }

    async function loginAPI() {
        try {
            const response = await API.post(
                '/auth/user/signin/',
                {
                email: email,
                password: password
                },
            )
            .then(function (response) {
                var str1 = 'Bearer '
                var res = str1.concat(response.data.access)
                AsyncStorage.setItem('accessToken', res);
                FCMToken()
                navigation.navigate('Main')
                console.log('[access] ' + res)
            })
            .catch(function (error) {
                console.log(error);
            });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <View style={LoginScreenStyles.mainContainer}>
            <View style={LoginScreenStyles.registerContainer}>
                <Logo/>
                <RegisterInput
                    email={email}
                    password={password}
                    setEmail={setEmail}
                    setPassword={setPassword}
                />
                <View style={LoginScreenStyles.registerButton}>
                    <TouchableOpacity
                        style={LoginStyles.registerButton}
                        onPress={() => {
                            loginAPI()
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

export default LoginScreen;