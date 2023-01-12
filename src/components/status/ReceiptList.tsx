import React from "react";
import {View} from 'react-native';
import ReceiptTitle from "./ReceiptTitle";
import ReceiptContent from "./ReceiptContent";

function ReceiptList() {

    return(
        <View>
            <ReceiptTitle/>
            <ReceiptContent/>
        </View>
    );
};

export default ReceiptList;

