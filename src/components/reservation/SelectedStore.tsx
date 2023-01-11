import React from "react";
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../screens/RootStackParams';
import ReservationStyles from "../../styles/ReservationStyles";
import StoreTitle from "./StoreTitle";
import StoreDetail from "./StoreDetail";

type ResgisterScreenProp = StackNavigationProp<RootStackParamList, 'Map'>;

function SelectedStore() {
    const navigation = useNavigation<ResgisterScreenProp>();

    return(
        <View style={ReservationStyles.selectedStore}>
            <StoreTitle/>
            <StoreDetail/>
        </View>
    );
};

export default SelectedStore;