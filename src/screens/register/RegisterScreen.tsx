import React from "react";
import {View, Text, TouchableOpacity} from 'react-native';            //TouchableOpacity 버튼을 개성있게 편집하고자 할 때 사용
import {useNavigation} from '@react-navigation/native';   //네비게이션
import {StackNavigationProp} from '@react-navigation/stack';  //네비게이션
import {RootStackParamList} from '../RootStackParams';   //네비게이션 허가증
import RegisterStyles from "../../styles/RegisterStyles";
import Logo from "../../components/register/Logo";
import RegisterInput from "../../components/register/RegisterInput";
import RegisterScreenStyles from "../../styles/screens/RegisterScreenStyles";

type ResgisterScreenProp = StackNavigationProp<RootStackParamList, 'Register'>;  //네비게이션을 사용할 친구가 누구니!, 현재 페이지

function RegisterScreen() {
    const navigation = useNavigation<ResgisterScreenProp>();  // 

    return (
        <View style={RegisterScreenStyles.container}>
            <Logo/>
            <RegisterInput/>
            <View style={RegisterScreenStyles.registerButton}>
                <TouchableOpacity
                    style={RegisterStyles.registerButton}
                    onPress={() => navigation.navigate('Main')}   //onPress 눌렀을 때 화면이 넘어가고자 하기 때문에 사용
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