import React, { Component } from "react";
import {StyleSheet, Text, View} from 'react-native';
import mapStyles from '../../styles/MapStyles';
import StatusListStyles from "../../styles/StatusListStyles";
import statusStyles from "../../styles/StatusStyles";
import HomeButton from "./HomeButton";

function StatusTitle() {
    return (
        <View style={statusStyles.statusTitle}>
            <HomeButton/>
            <Text style={StatusListStyles.StatusTitleText}>
                대기 현황
            </Text> 
        </View>
    ); 
};

export default StatusTitle;