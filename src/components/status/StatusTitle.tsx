import React, { Component } from "react";
import {StyleSheet, Text, View} from 'react-native';
import mapStyles from '../../styles/MapStyles';

function StatusTitle() {
    return (
        <View style={{width: 1000, height: 115, top: 50 }}>
            <View style={{flex: 1, backgroundColor: '#FCD265'}} />
                <Text style={mapStyles.maptitle}>
                    대기 현황 
                </Text> 
        </View>
    ); 
};

export default StatusTitle;