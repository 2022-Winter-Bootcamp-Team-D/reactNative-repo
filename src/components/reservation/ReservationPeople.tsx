import React, {useState } from "react";
import {View, TouchableOpacity, Text} from 'react-native';
import ReservationScreenStyles from "../../styles/screens/ReservationScreenStyles";
import ReservationStyles from "../../styles/ReservationStyles";

interface Props {
    people: number;
    setPeople: React.Dispatch<React.SetStateAction<number>>;
}

function ReservationPeople({people, setPeople}:Props) {
    function minus() {
        if (people >= 2) {
            setPeople(people - 1)
        }
    }

    return (
        <View style={ReservationScreenStyles.reservationPeople}>
            <View style={ReservationScreenStyles.people}>
                <Text style={ReservationStyles.peopleTitle}>
                    예약 인원
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
                        {people}
                    </Text>
                </View>
                <TouchableOpacity
                    style={ReservationStyles.calculationButton}
                    onPress={() => {setPeople(people + 1)}}
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