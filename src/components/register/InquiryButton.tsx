import React from "react";
import {View, TouchableOpacity, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../screens/RootStackParams';
import RegisterStyles from '../../styles/RegisterStyles';

type ResgisterScreenProp = StackNavigationProp<RootStackParamList, 'Register'>;


function InquiryButton() {

    const navigation = useNavigation<ResgisterScreenProp>();
    
    return (
        <View >
            <TouchableOpacity
                    style={RegisterStyles.inquiryButton}
                    onPress={() => {
                        navigation.navigate('Inquiry')
                    }}
                >
                    <Text style={RegisterStyles.registerButtonText}>
                        웨이팅 조회
                    </Text>
                </TouchableOpacity>
        </View>
    );  
};

export default InquiryButton;