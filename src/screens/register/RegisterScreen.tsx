import React from "react";
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../RootStackParams';
import RegisterStyles from "../../styles/RegisterStyles";
import Logo from "../../components/register/Logo";

type ResgisterScreenProp = StackNavigationProp<RootStackParamList, 'Register'>;

function RegisterScreen() {
    const navigation = useNavigation<ResgisterScreenProp>();

    return (
        <View style={RegisterStyles.container}>
            <Logo/>
            <Button title="웨이터 등록" onPress={() => navigation.navigate('Main')} />
            <Button title="웨이터 등록" onPress={() => navigation.navigate('Main')} />
        
        </View>
    );
};

export default RegisterScreen;