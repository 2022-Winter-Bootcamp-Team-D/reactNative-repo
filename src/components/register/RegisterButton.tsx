import React,{useState} from "react";
import {View, TouchableOpacity, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../screens/RootStackParams';
import messaging from '@react-native-firebase/messaging';
import RegisterStyles from '../../styles/RegisterStyles';
import AsyncStorage from '@react-native-community/async-storage';

type ResgisterScreenProp = StackNavigationProp<RootStackParamList, 'Register'>;

function RegisterButton() {
    const navigation = useNavigation<ResgisterScreenProp>();

    async function onAppBootstrap() {
        // Register the device with FCM
        await messaging().registerDeviceForRemoteMessages();
        // Get the token
        const token = await messaging().getToken();
        // Save the token
        AsyncStorage.setItem('token', token, () => { // 'token'의 변수로 토큰값 저장
            console.log('token저장')
        });
        console.log('[Token]' + token)
        return (token)
    }

    function UserRegister() {
        const [name, setName] = useState('');
        const [phoneNum, setPhoneNum] = useState('');
        console.log(setName, setPhoneNum)
    }

    return (
        <View >
            <TouchableOpacity
                    style={RegisterStyles.registerButton}
                    onPress={() => {
                        onAppBootstrap()
                        UserRegister()
                        navigation.navigate('Main')
                    }}
                >
                     <Text style={RegisterStyles.registerButtonText}>
                        웨이팅 등록
                    </Text>
                </TouchableOpacity>
        </View>
    );  
};

export default RegisterButton;