import React, { useState } from "react";
import {View, ScrollView, Text, TouchableOpacity} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../screens/RootStackParams';
import {useNavigation} from '@react-navigation/native';
import {Collapse,CollapseHeader, CollapseBody} from 'accordion-collapse-react-native';
import MapButton from "../../components/maplist/MapButton";
import mapListScreenStyles from "../../styles/screens/MapListScreenStyles";
import ArrayList from "../../components/maplist/ArrayList";
import mapListStyles from "../../styles/MapListStyles";
import mapStyles from "../../styles/MapStyles";

type ResgisterScreenProp = StackNavigationProp<RootStackParamList, 'MapList'>;

function MapListScreen() {
    type ScreenRouteProp = RouteProp<RootStackParamList,'MapList'>;
    const navigation = useNavigation<ResgisterScreenProp>();
    const route = useRoute<ScreenRouteProp>();

    const storeList = [
        {
            store_id: route.params?.mySite.store_id,
            store_name : route.params?.mySite.store_name,
            waiting: route.params?.mySite.waiting,
            distance: route.params?.mySite.distance,
            information : route.params?.mySite.information,
        },
        {
            store_id: 2,
            store_name : "돼지국밥집",
            waiting: 5,
            distance: 1000,
            information : "하위",
        },
    ]

    return (
        <ScrollView stickyHeaderIndices={[2]} style={mapListScreenStyles.container}>
            <View style={mapListScreenStyles.myPosition}>
                <View style={mapStyles.positionContainer}>
                    <Text style={mapStyles.myPosition}>
                        웨이팅을 시작해보세요!
                    </Text>
                </View>
            </View>
            <ArrayList/>
            <View style={mapListScreenStyles.mapListButton}>
                <MapButton/>
            </View>
            <View>
                {storeList.map((e) =>
                    <View 
                        style={mapListScreenStyles.listContainer}
                        key={e.store_id}
                    >
                        <Collapse>
                            <CollapseHeader>
                                <View style={mapListStyles.listTitle}>
                                    <Text style={mapListStyles.number}>
                                        {e.store_id}
                                    </Text>
                                    <Text style={mapStyles.storeNameText}>
                                        {e.store_name}
                                    </Text>
                                    <Text style={mapListStyles.waitingText}>
                                        대기 {e.waiting}팀
                                    </Text>
                                    <Text style={mapListStyles.storeDistanceText}>
                                        {e.distance}m
                                    </Text>
                                </View>
                            </CollapseHeader>
                            <CollapseBody>
                                <Text style={mapListStyles.storeDetailText}>
                                    {e.information}
                                </Text>
                                <TouchableOpacity
                                    style={mapListStyles.reservationButton}
                                    onPress={() => navigation.navigate('Reservation')}>
                                    <Text style={mapListStyles.reservationText}>
                                        예약하기
                                    </Text>
                                </TouchableOpacity>
                            </CollapseBody>
                        </Collapse>
                        <View style={mapListStyles.verticalLine}/> 
                    </View>  
                )}
            </View>
            
        </ScrollView>
    );
};


export default MapListScreen;