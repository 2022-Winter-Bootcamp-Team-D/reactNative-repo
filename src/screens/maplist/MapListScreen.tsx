import React, { useState, useEffect } from "react";
import {View, ScrollView, Text, TouchableOpacity, LogBox} from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../screens/RootStackParams';
import {useNavigation} from '@react-navigation/native';
import geolocation from 'react-native-geolocation-service';
import {Collapse,CollapseHeader, CollapseBody} from 'accordion-collapse-react-native';
import MapButton from "../../components/maplist/MapButton";
import mapListScreenStyles from "../../styles/screens/MapListScreenStyles";
import ArrayList from "../../components/maplist/ArrayList";
import mapListStyles from "../../styles/MapListStyles";
import mapStyles from "../../styles/MapStyles";
import axios from "axios";
import AsyncStorage from "@react-native-community/async-storage";

type ResgisterScreenProp = StackNavigationProp<RootStackParamList, 'MapList'>;
interface M0 {
    latitude: number;
    longitude: number;
}
function MapListScreen() {
    const navigation = useNavigation<ResgisterScreenProp>();
    const isFocused = useIsFocused();
    const [myLocation, setMyLocation] = useState<M0>({latitude: 0, longitude: 0});
    const [storeList, setStoreList] = useState([]);
    const [myStoreList, setMyStoreList] = useState([{
        store_id: 0,
        store_name : '',
        distance: 0,
        waiting: 0,
        is_waiting: true,
        information : '',
        latitude: 0,
        longitude: 0
    }]);

    useEffect(() => {
        async function mapData() {
            try {
                const response = await axios.post(
                    'http://15.164.28.246:8000/api/v1/stores/search/',
                    {
                        token: await AsyncStorage.getItem('FCMToken'),
                        latitude: myLocation.latitude, 
                        longitude: myLocation.longitude
                    },
                    { headers : {Authorization: await AsyncStorage.getItem('accessToken')}},)
            .then(function (response) {
                setStoreList(response.data);
                setMyStoreList(storeList["data"])
            })
            .catch(function (error) {
                console.log(error)
            });
            } catch (error) {
                console.log(error);
            }
        }

        if (geolocation) {
            geolocation.getCurrentPosition(success, error);
            mapData();
        }
        
    // ??????????????? ??????????????? ?????? ?????? ???????????????.
        function success(position: any) {
            console.log (position.coords.latitude, position.coords.longitude)
            setMyLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            });
        }

    // ?????? ????????? ?????? ????????? ???????????? ???????????????.
        function error() { // ????????? ????????? & ????????????, ????????? ??????
            setMyLocation({latitude: 37.3400342, longitude: 126.7335061 }); // ??????????????? ?????? latitude: 37.5634, longitude: 126.9093 
        }
        LogBox.ignoreAllLogs();
    }, [isFocused]);


    return (
        <ScrollView stickyHeaderIndices={[2]} style={mapListScreenStyles.container}>
            <View style={mapListScreenStyles.myPosition}>
                <View style={mapStyles.positionContainer}>
                    <Text style={mapStyles.myPosition}>
                        ???????????? ??????????????????!
                    </Text>
                </View>
            </View>
            <ArrayList/>
            <View style={mapListScreenStyles.mapListButton}>
                <MapButton/>
            </View>
            <View>
                {myStoreList?.map((e) =>
                    <View key={e.store_name}>
                        <Collapse>
                            <CollapseHeader>
                                <View style={mapListStyles.listTitle}>
                                    {/* <Text style={mapListStyles.number}>
                                        {e.store_id}
                                    </Text> */}
                                    <Text 
                                    numberOfLines={1}
                                    style={mapListStyles.storeNameText}>
                                        {e.store_name}
                                    </Text>
                                    <Text style={mapListStyles.waitingText}>
                                        ?????? {e.waiting}???
                                    </Text>
                                    <Text style={mapListStyles.storeDistanceText}>
                                        {Math.round(e.distance)}m
                                    </Text>
                                </View>
                            </CollapseHeader>
                            <CollapseBody>
                                <Text style={mapListStyles.storeDetailText}>
                                    {e.information}
                                </Text>
                                <TouchableOpacity
                                    style={mapListStyles.reservationButton}
                                    onPress={() => navigation.navigate('Reservation', {mySite: e})}>
                                    <Text style={mapListStyles.reservationText}>
                                        ????????????
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