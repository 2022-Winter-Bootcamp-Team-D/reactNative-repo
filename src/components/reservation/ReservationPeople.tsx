import React, {useState } from "react";
import {View, TouchableOpacity, Text} from 'react-native';
import ReservationScreenStyles from "../../styles/screens/ReservationScreenStyles";
import ReservationStyles from "../../styles/ReservationStyles";


function ReservationPeople() {
    const [counter, setcount] = useState(0);

    return (
        <View style={ReservationScreenStyles.reservationPeople}>
            <View style={ReservationScreenStyles.people}>
                <Text style={ReservationStyles.peopleTitle}>
                    인원 입력
                </Text>
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