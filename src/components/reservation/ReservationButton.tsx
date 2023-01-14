import React from "react";
import {View, TouchableOpacity, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../screens/RootStackParams';
import RegisterStyles from '../../styles/RegisterStyles';
import AsyncStorage from '@react-native-community/async-storage';
import axios from "axios";
import API from "../../services/API";

type ResgisterScreenProp = StackNavigationProp<RootStackParamList, 'Reservation'>;

function ReservationButton(password) {
    const navigation = useNavigation<ResgisterScreenProp>();

    async function getFCMToken() {
        // 가져오기
        AsyncStorage.getItem('token', (err, result) => { // 'token'에 담긴 아이디 불러오기
            console.log(result); // result에 담김 //불러온거 출력
        return(result);
        });
    }
    
    const data = {
        store_id: 1,
        name: "혜린",
        phoneNum: "01068935283",
        people: 3,
        password: 5678,
        token: "token",
        withCredentials:true
    }

    async function postReservationData() {
        try {
            const response = await API.post(
                '/waiting/',
                data,
            )
          .then(function (response) {
            console.log(response.data);
            navigation.navigate('Status')
          })
          .catch(function (error) {
            console.log(error);
          });
        } catch (error) {
            console.log(error);
        }
    };

    function userPassword(){
        console.log(password)
    }
    
    return (
        <View >
            <TouchableOpacity
                    style={RegisterStyles.registerButton}
                    onPress={() => {
                        getFCMToken()
                        postReservationData()
                        userPassword()
                    }}
                >
                    <Text style={RegisterStyles.registerButtonText}>
                        웨이팅 시작할게요!
                    </Text>
                </TouchableOpacity>
        </View>
    );  
};

export default ReservationButton;