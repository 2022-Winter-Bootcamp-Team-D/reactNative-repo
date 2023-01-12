import React, { Component } from "react";
import {StyleSheet, Text, View} from 'react-native';
import mapStyles from '../../styles/MapStyles';

function StatusTitle() {
    return (
        <View style={{width: '100%', height: '9%',backgroundColor: '#FCD265' }}>
                <Text style={mapStyles.maptitle}>
                    대기 현황
                </Text> 
        </View>
    ); 
};

export default StatusTitle;