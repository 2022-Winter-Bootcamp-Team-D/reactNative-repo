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
import mapStyles from "../../styles/MapStyles";
import MakeList from "../../components/maplist/MakeList";
import mapListStyles from "../../styles/MapListStyles";
import mapScreenStyles from "../../styles/screens/MapScreenStyles";

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
                <MakeList/>
                <View style={mapListStyles.verticalLine}/>
                <MakeList/>
                <View style={mapListStyles.verticalLine}/>
                <MakeList/>
                <View style={mapListStyles.verticalLine}/>
                <MakeList/>
                <View style={mapListStyles.verticalLine}/>
                <MakeList/>
                <View style={mapListStyles.verticalLine}/>
                <MakeList/>
                <View style={mapListStyles.verticalLine}/>
                <MakeList/>
                <View style={mapListStyles.verticalLine}/>
                <MakeList/>
                <View style={mapListStyles.verticalLine}/>
                <MakeList/>
                <View style={mapListStyles.verticalLine}/>
                <MakeList/>
                <View style={mapListStyles.verticalLine}/>
            </View>
            <View>
                <MakeList/>
                <View style={mapListStyles.verticalLine}/>
            </View>
            <View>
                <MakeList/>
                <View style={mapListStyles.verticalLine}/>
            </View>
            <View>
                <MakeList/>
                <View style={mapListStyles.verticalLine}/>
            </View>
        </ScrollView>
    );
};


export default MapListScreen;