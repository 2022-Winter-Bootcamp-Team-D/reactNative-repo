import React from "react";
import {View} from 'react-native';
import Modal from 'react-native-simple-modal';
import mapStyles from '../../styles/MapStyles';

function StoreInformation() {
    const usestate ={open : false}; //모달창의 열림여부를 판단해주는 상태변수를 만든다

    return (
        <View style={mapStyles.mapView}>
        </View>
    );
};

export default StoreInformation;