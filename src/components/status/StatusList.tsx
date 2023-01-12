import React from "react";
import {View} from 'react-native';
import ListTitle from'./ListTitle';
import ListContent from './ListContent';

function StatusList() {

    return(
        <View>
            <ListTitle/>
            <ListContent/>
        </View>
    );
};

export default StatusList;

