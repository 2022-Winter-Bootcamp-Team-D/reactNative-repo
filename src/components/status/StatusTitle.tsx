import React, { Component } from "react";
import {StyleSheet, Text, View} from 'react-native';
import mapStyles from '../../styles/MapStyles';
import statusStyles from "../../styles/StatusStyles";

function StatusTitle() {
    return (
        <View style={statusStyles.statusTitle}>
                <Text style={mapStyles.maptitle}>
                    대기 현황
                </Text> 
        </View>
    ); 
};

export default StatusTitle;