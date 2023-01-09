import React from "react";
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../RootStackParams';

type ResgisterScreenProp = StackNavigationProp<RootStackParamList, 'Register'>;


function RegisterScreen() {
    const navigation = useNavigation<ResgisterScreenProp>();

    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>고객 등록</Text>
        <Button title="Register" onPress={() => navigation.navigate('Main')} />
        </View>
    );
};

export default RegisterScreen;