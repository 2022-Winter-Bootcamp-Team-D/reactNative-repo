import React from "react";
import {View, TouchableOpacity, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../screens/RootStackParams';
import RegisterStyles from '../../styles/RegisterStyles';

type ResgisterScreenProp = StackNavigationProp<RootStackParamList, 'Reservation'>;

function ReservationButton() {

    const navigation = useNavigation<ResgisterScreenProp>();
    
    return (
        <View >
            <TouchableOpacity
                    style={RegisterStyles.registerButton}
                    onPress={() => {
                        navigation.navigate('Status')
                    }}
                >
                    <Text style={RegisterStyles.registerButtonText}>
                        웨이팅 시작 할께요!
                    </Text>
                </TouchableOpacity>
        </View>
    );  
};

export default ReservationButton;