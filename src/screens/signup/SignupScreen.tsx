import React,{useState} from "react";
import {View, TouchableOpacity, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../screens/RootStackParams';
import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-community/async-storage';
import RegisterStyles from "../../styles/LoginStyles";
import Logo from "../../components/login/Logo";
import RegisterInput from "../../components/login/RegisterInput";
import RegisterScreenStyles from "../../styles/screens/LoginScreenStyles";
import InquiryButton from "../../components/login/SignupButton";
import SignupInput from "../../components/signup/signupInput";
import API from "../../services/API";


type SignupScreenProp = StackNavigationProp<RootStackParamList, 'Signup'>;

function RegisterScreen() {
    const navigation = useNavigation<SignupScreenProp>();
    const [name, setName] = useState('');
    const [phoneNum, setPhoneNum] = useState('');
    const [email, setEamil] = useState('');
    const [password, setPassword] = useState('');

    async function loginAPI() {
        try {
            const response = await API.post(
                '/auth/user/signup/',
                {
                name: name, 
                phone_num: phoneNum,
                email: email,
                password: password
                },
                {withCredentials:true, }
            )
            .then(function (response) {
                console.log(response.data.accessToken)
                AsyncStorage.setItem('accessToken', response.data.accessToken);
                // AsyncStorage.setItem('refreshToken', response.data.refreshToken);
                navigation.navigate('Main')
            })
            .catch(function (error) {
                console.log(error);
            });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <View style={RegisterScreenStyles.mainContainer}>
            <View style={RegisterScreenStyles.signupContainer}>
                <Logo/>
                <SignupInput
                    name={name}
                    phoneNum={phoneNum}
                    email={email}
                    password={password}
                    setName={setName}
                    setEamil={setEamil}
                    setPhoneNum={setPhoneNum}
                    setPassword={setPassword}
                />
                <View style={RegisterScreenStyles.registerButton}>
                    <TouchableOpacity
                        style={RegisterStyles.registerButton}
                        onPress={() => {
                            loginAPI()
                            // navigation.navigate('Main')
                        }}
                    >
                        <Text style={RegisterStyles.registerButtonText}>
                            웨이팅 하러가기
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default RegisterScreen;