import React from "react";
import {View, TouchableOpacity, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../screens/RootStackParams';
import RegisterStyles from '../../styles/RegisterStyles';
import AsyncStorage from '@react-native-community/async-storage';

type ResgisterScreenProp = StackNavigationProp<RootStackParamList, 'Reservation'>;

function ReservationButton() {

    const navigation = useNavigation<ResgisterScreenProp>();

    async function getFCMToken() {
        // 가져오기
        AsyncStorage.getItem('token', (err, result) => { // 'token'에 담긴 아이디 불러오기
            console.log(result); // result에 담김 //불러온거 출력
        return(result);

        });
    }

    return (
        <View >
            <TouchableOpacity
                    style={RegisterStyles.registerButton}
                    onPress={() => {
                        getFCMToken()
                        navigation.navigate('Status')
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