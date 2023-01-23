import React from "react";
import {View, TouchableOpacity, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../screens/RootStackParams';
import RegisterStyles from '../../styles/RegisterStyles';

type ResgisterScreenProp = StackNavigationProp<RootStackParamList, 'Reservation'>;

function CancelButton() {

    const navigation = useNavigation<ResgisterScreenProp>();

    return (
        <View >
            <TouchableOpacity
                style={RegisterStyles.inquiryButton}
                onPress={() => {
                    navigation.navigate('Main')
                }}
            >
                <Text style={RegisterStyles.registerButtonText}>
                    좀 더 고민해 볼게요!
                </Text>
            </TouchableOpacity>
        </View>
    );  
};

export default CancelButton;