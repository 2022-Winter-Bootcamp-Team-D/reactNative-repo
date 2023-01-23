import React from "react";
import {View, TouchableOpacity, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../screens/RootStackParams';
import RegisterStyles from '../../styles/RegisterStyles';
import API from "../../services/API";

type ResgisterScreenProp = StackNavigationProp<RootStackParamList, 'Reservation'>;

function CancelButton() {
    const navigation = useNavigation<ResgisterScreenProp>();
    
    const data = {
        waiting_id: 1,
        store_id: 1
    }

    async function patchReservation() {
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

    return (
        <View >
            <TouchableOpacity
                style={RegisterStyles.inquiryButton}
                onPress={() => {
                    patchReservation()
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