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
import SignupInput from "../../components/signup/signupInput";


type SignupScreenProp = StackNavigationProp<RootStackParamList, 'Signup'>;

function RegisterScreen() {
    const navigation = useNavigation<SignupScreenProp>();
    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [check, setCheck] = useState('');
    const [phoneNum, setPhoneNum] = useState('');

    function userSignup(){
        console.log("이름: " + name)
        console.log("아이디: " + id)
        console.log("비밀번호: " + password)
        console.log("비밀번호확인: " + check)
        console.log("전화번호: " + phoneNum)
    }

    return (
        <View style={RegisterScreenStyles.mainContainer}>
            <View style={RegisterScreenStyles.signupContainer}>
                <Logo/>
                <SignupInput
                    setName={setName}
                    setId={setId}
                    setPassword={setPassword}
                    setCheck={setCheck}
                    setPhoneNum={setPhoneNum}
                />
                <View style={RegisterScreenStyles.registerButton}>
                    <TouchableOpacity
                        style={RegisterStyles.registerButton}
                        onPress={() => {
                            userSignup()
                            navigation.navigate('Main');
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