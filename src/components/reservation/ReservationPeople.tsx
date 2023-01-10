import React from "react";
import {View, TouchableOpacity, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../screens/RootStackParams';
import RegisterStyles from '../../styles/RegisterStyles';
import ReservationScreenStyles from "../../styles/screens/ReservationScreenStyles";
import ReservationStyles from "../../styles/ReservationStyles";

type ResgisterScreenProp = StackNavigationProp<RootStackParamList, 'Reservation'>;


function ReservationPeople() {

    const navigation = useNavigation<ResgisterScreenProp>();

    return (
        <View style={ReservationScreenStyles.reservationPeople}>
            <Text style={ReservationStyles.peopleTitle}>
                인원 입력
            </Text>
            <View style={ReservationScreenStyles.people}>
                <TouchableOpacity
                    style={RegisterStyles.inquiryButton}
                    onPress={() => { }}
                >
                    <Text style={RegisterStyles.registerButtonText}>
                        +
                    </Text>
                </TouchableOpacity>
                <View style={RegisterStyles.registerButtonText}>
                    <Text style={RegisterStyles.registerButtonText}>
                        2명
                    </Text>
                </View>
                <TouchableOpacity
                    style={RegisterStyles.inquiryButton}
                    onPress={() => { }}
                >
                    <Text style={RegisterStyles.registerButtonText}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );  
};

export default ReservationPeople;