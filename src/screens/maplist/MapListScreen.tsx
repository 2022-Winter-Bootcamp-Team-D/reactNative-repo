import React from "react";
import {View, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../screens/RootStackParams';

import MapTitle from "../../components/map/MapTitle";
import MyPosition from "../../components/map/MyPosition";
import MapButton from "../../components/maplist/MapButton";
import mapListScreenStyles from "../../styles/screens/MapListScreenStyles";
import ArrayList from "../../components/maplist/ArrayList";
import MakeList from "../../components/maplist/ListTitle";
import mapListStyles from "../../styles/MapListStyles";
import CollapesibleView from "../../components/maplist/CollapsibleView";

type ResgisterScreenProp = StackNavigationProp<RootStackParamList, 'MapList'>;


function MapListScreen() {
    const navigation = useNavigation<ResgisterScreenProp>();

    return (
        <ScrollView stickyHeaderIndices={[3]} style={mapListScreenStyles.container}>
            <MapTitle/>
            <View style={mapListScreenStyles.myPosition}>
                <MyPosition/>
            </View>
            <ArrayList/>
            <View style={mapListScreenStyles.mapListButton}>
                <MapButton/>
            </View>
            <View style={mapListScreenStyles.listContainer}>
                <CollapesibleView/>
                <View style={mapListStyles.verticalLine}/>
                <CollapesibleView/>
                <View style={mapListStyles.verticalLine}/>
                <CollapesibleView/>
                <View style={mapListStyles.verticalLine}/>
                <CollapesibleView/>
                <View style={mapListStyles.verticalLine}/>
                <CollapesibleView/>
                <View style={mapListStyles.verticalLine}/>
                <CollapesibleView/>
                <View style={mapListStyles.verticalLine}/>
                <CollapesibleView/>
                <View style={mapListStyles.verticalLine}/>
                <CollapesibleView/>
                <View style={mapListStyles.verticalLine}/>
                <CollapesibleView/>
                <View style={mapListStyles.verticalLine}/>
                <CollapesibleView/>
                <View style={mapListStyles.verticalLine}/>
                <CollapesibleView/>
                <View style={mapListStyles.verticalLine}/>
                <CollapesibleView/>
                <View style={mapListStyles.verticalLine}/>
                <CollapesibleView/>
                <View style={mapListStyles.verticalLine}/>
            </View>
        </ScrollView>
    );
};


export default MapListScreen;