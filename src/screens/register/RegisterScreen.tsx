import React,{useState} from "react";
import {View, TouchableOpacity, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../screens/RootStackParams';
import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-community/async-storage';
import RegisterStyles from "../../styles/RegisterStyles";
import Logo from "../../components/register/Logo";
import RegisterInput from "../../components/register/RegisterInput";
import RegisterScreenStyles from "../../styles/screens/RegisterScreenStyles";
import InquiryButton from "../../components/register/SignupButton";

type ResgisterScreenProp = StackNavigationProp<RootStackParamList, 'Register'>;

function RegisterScreen() {
    const navigation = useNavigation<ResgisterScreenProp>();
    const [name, setName] = useState('');
    const [phoneNum, setPhoneNum] = useState('');

    async function onAppBootstrap() {
        // Register the device with FCM
        await messaging().registerDeviceForRemoteMessages();
        // Get the token
        const token = await messaging().getToken();
        // Save the token
        AsyncStorage.setItem('token', token, () => { // 'token'의 변수로 토큰값 저장
        });
        console.log('[Token]' + token)
        return (token)
    }

    function userRegister(){
        console.log(name)
        console.log(phoneNum)
    }

    return (
        <View style={RegisterScreenStyles.mainContainer}>
            <View style={RegisterScreenStyles.registerContainer}>
                <Logo/>
                <RegisterInput
                    setName={setName}
                    setPhoneNum={setPhoneNum}
                />
                <View style={RegisterScreenStyles.registerButton}>
                    <TouchableOpacity
                        style={RegisterStyles.registerButton}
                        onPress={() => {
                            onAppBootstrap()
                            userRegister()
                            navigation.navigate('Main');
                        }}
                    >
                        <Text style={RegisterStyles.registerButtonText}>
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