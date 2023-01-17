import React from "react";
import {View, ScrollView, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../screens/RootStackParams';

import MyPosition from "../../components/map/MyPosition";
import MapButton from "../../components/maplist/MapButton";
import mapListScreenStyles from "../../styles/screens/MapListScreenStyles";
import ArrayList from "../../components/maplist/ArrayList";
import mapListStyles from "../../styles/MapListStyles";
import CollapesibleView from "../../components/maplist/CollapsibleView";
import mapStyles from "../../styles/MapStyles";

type ResgisterScreenProp = StackNavigationProp<RootStackParamList, 'MapList'>;

function MapListScreen() {
    const navigation = useNavigation<ResgisterScreenProp>();
    const mySite = "대한민국 서울시";


    return (
        <ScrollView stickyHeaderIndices={[2]} style={mapListScreenStyles.container}>
            <View style={mapListScreenStyles.myPosition}>
                <View style={mapStyles.positionContainer}>
                    <Text style={mapStyles.myPosition}>
                        내 위치
                    </Text>
                    <TouchableOpacity>
                        <Text style={mapStyles.positionDetail}>
                            {mySite}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <ArrayList/>
            <View style={mapListScreenStyles.mapListButton}>
                <MapButton/>
            </View>
            <View style={mapListScreenStyles.listContainer}>
                <CollapesibleView/>
                <View style={mapListStyles.verticalLine}/>
            </View>
        </ScrollView>
    );
};


export default MapListScreen;