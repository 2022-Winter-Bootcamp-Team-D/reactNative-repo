import React, { useEffect, useState } from "react";
import Modal from 'react-native-modal';
import { useIsFocused } from '@react-navigation/native';
import {View, TouchableOpacity, Text, LogBox} from 'react-native';
import mapStyles from '../../styles/MapStyles';
import NaverMapView, {Marker} from "react-native-nmap";
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../screens/RootStackParams';
import AsyncStorage from "@react-native-community/async-storage";
import geolocation from 'react-native-geolocation-service';
import mapScreenStyles from "../../styles/screens/MapScreenStyles";
import API from "../../services/API";
import axios from "axios";

type ResgisterScreenProp = StackNavigationProp<RootStackParamList, 'Map'>;

interface M0 {
    latitude: number;
    longitude: number;
}

interface MySite {
    store_id: number,
    store_name : string,
    distance: number,       // 나와의 떨어진 거리
    waiting: number,        // 현재 웨이팅을 받고 있는지?
    is_waiting: boolean,
    information : string,
    latitude: number,
    longitude: number
}


function MapView() {
    const [myLocation, setMyLocation] = useState<M0>({latitude: 0, longitude: 0});
    const [modalVisible, setModalVisible] = useState(false);
    const isFocused = useIsFocused();
    const [modalOutput, setModalOutput] = useState<string>("");
    const navigation = useNavigation<ResgisterScreenProp>();
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
    const [newStoreList, setNewStoreList] = useState([]);
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);

    const marker = [
        {
            latitude: latitude,
            longitude : longitude
        }
    ]

    //현재 위치를 추적합니다.
    useEffect(() => {
        async function mapData() {
            try {
                const response = await axios.post(
                    'http://15.164.28.246:8000/api/v1/stores/search/',
                    {
                        latitude: myLocation.latitude, 
                        longitude: myLocation.longitude
                    },
                    { headers : {Authorization: await AsyncStorage.getItem('accessToken')}},
                )
              .then(response => {
                setStoreList(response.data);
                setMyStoreList(storeList["data"])
                return myStoreList
                // if (response.status === 500) {
                //     var str1 = 'Bearer '
                //     var res = str1.concat(response.data.access)
                //     response.data.exception = AsyncStorage.setItem('accessToken', res);;
                // }
                }
              )
              .catch(function (error) {
                console.log(error)
              });
            } catch (error) {
                console.log(error);
            }
        };
        
        if (geolocation) {
            geolocation.getCurrentPosition(success, error);
            mapData();
        }

  // 위치추적에 성공했을때 위치 값을 넣어줍니다.
        function success(position: any) {
            setMyLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            });
        }

    // 위치 추적에 실패 했을때 초기값을 넣어줍니다.
        function error() { // 현우네 양꼬치 & 사천훠궈, 현우네 반점
            setMyLocation({latitude: 37.5454, longitude: 127.1541 }); // 현우네밥집 주소 latitude: 37.5634, longitude: 126.9093 
        }

        
    }, [isFocused]);
    LogBox.ignoreAllLogs();
    const Point = {latitude: myLocation.latitude, longitude: myLocation.longitude}; 

    return (
        <View style={mapScreenStyles.container}>
            <View style={mapScreenStyles.myPosition}>
                <View style={mapStyles.positionContainer}>
                    <Text style={mapStyles.myPosition}>
                        웨이팅을 시작해보세요!
                    </Text>
                </View>
            </View>
            <View style={mapScreenStyles.mapListButton}>
                <TouchableOpacity 
                    style={mapStyles.mapListButton}
                    onPress={() => navigation.navigate('MapList')}>
                    
                    <Text style={mapStyles.buttonText}>
                        리스트로 보기
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={mapStyles.mapView}>
                <NaverMapView style={{width: '100%', height: '100%'}}
                            showsMyLocationButton={true}
                            center={{...Point,zoom: 16}} // ... 은 배열을 풀어준다.
                            onCameraChange={(e) => (e.latitude, e.longitude)}
                >
                    <View>
                        {myStoreList&&myStoreList.map((e: any) =>
                            <Marker
                                key={e.latitude}
                                coordinate={e} 
                                onClick={() => navigation.navigate('Reservation', {mySite: e})}
                                caption={{
                                    text: e.store_name,
                                    textSize: 15,
                                    }
                                }
                            />
                        )}
                        
                    </View>

                </NaverMapView>
            </View>
        </View>
    ); 
};

export default MapView;