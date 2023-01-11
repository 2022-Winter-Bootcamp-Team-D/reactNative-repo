import React, {useState } from "react";
import {View, TouchableOpacity, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../screens/RootStackParams';
import RegisterStyles from '../../styles/RegisterStyles';
import ReservationScreenStyles from "../../styles/screens/ReservationScreenStyles";
import ReservationStyles from "../../styles/ReservationStyles";

type ResgisterScreenProp = StackNavigationProp<RootStackParamList, 'Reservation'>;


function ReservationPeople() {
    const [counter, setcount] = useState(0);
    const navigation = useNavigation<ResgisterScreenProp>();

    return (
        <View style={ReservationScreenStyles.reservationPeople}>
            <Text style={ReservationStyles.peopleTitle}>
                인원 입력
            </Text>
            <View style={ReservationScreenStyles.people}>
                <TouchableOpacity
                    style={ReservationStyles.calculationButton}
                    onPress={() => {setcount(counter - 1)}}
                >
                    <Text style={ReservationStyles.calculationText}>
                        -
                    </Text>
                </TouchableOpacity>
                <View style={ReservationStyles.peopleInputBox}>
                    <Text style={ReservationStyles.peopleText}>
                        {counter}
                    </Text>
                </View>
                <TouchableOpacity
                    style={ReservationStyles.calculationButton}
                    onPress={() => {setcount(counter + 1)}}
                >
                    <Text style={ReservationStyles.calculationText}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );  
};

export default ReservationPeople;