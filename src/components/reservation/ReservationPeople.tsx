import React, {useState } from "react";
import {View, TouchableOpacity, Text} from 'react-native';
import ReservationScreenStyles from "../../styles/screens/ReservationScreenStyles";
import ReservationStyles from "../../styles/ReservationStyles";


function ReservationPeople() {
    const [count, setCount] = useState(0);

    function minus() {
        if (count >= 2) {
            setCount(count - 1)
        }
    }

    return (
        <View style={ReservationScreenStyles.reservationPeople}>
            <View style={ReservationScreenStyles.people}>
                <Text style={ReservationStyles.peopleTitle}>
                    인원 입력
                </Text>
                <TouchableOpacity
                    style={ReservationStyles.calculationButton}
                    onPress={() => {
                        minus()}}
                >
                    <Text style={ReservationStyles.calculationText}>
                        -
                    </Text>
                </TouchableOpacity>
                <View style={ReservationStyles.peopleInputBox}>
                    <Text style={ReservationStyles.peopleText}>
                        {count}
                    </Text>
                </View>
                <TouchableOpacity
                    style={ReservationStyles.calculationButton}
                    onPress={() => {setCount(count + 1)}}
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