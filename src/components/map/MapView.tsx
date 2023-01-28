import React, { useEffect, useState } from "react";
import Modal from 'react-native-modal';
import {View, TouchableOpacity, Text} from 'react-native';
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
    //Output을 State로 받아서 화면에 표출하거나 정보 값으로 활용
    const [modalOutput, setModalOutput] = useState<string>("");
    const navigation = useNavigation<ResgisterScreenProp>();
    const [storeList, setStoreList] = useState([]);
    const [myStoreList, setMYStoreList] = useState([]);
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);
    const [store_id, setStore_id] = useState(0);
    const [store_name, setStore_name] = useState('');
    const [distance, setDistance] = useState(0);
    const [waiting, setWaiting] = useState(0);
    const [information, setInformation] = useState('');
    const [is_waiting, setIs_waiting] = useState(true);

    const mySite = {
        store_id: store_id,
        store_name : store_name,
        distance: distance,
        waiting: waiting,
        is_waiting: is_waiting,
        information : information,
    }

    const markers = [
        {
            latitude: latitude,
		    longitude: longitude 
        },
    ]

    //현재 위치를 추적합니다.
    useEffect(() => {
        if (geolocation) {
            geolocation.getCurrentPosition(success, error);
            mapData();
        }

  // 위치추적에 성공했을때 위치 값을 넣어줍니다.
        function success(position: any) {
            console.log (position.coords.latitude, position.coords.longitude)
            setMyLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            });
        }

    // 위치 추적에 실패 했을때 초기값을 넣어줍니다.
        function error() { // 현우네 양꼬치 & 사천훠궈, 현우네 반점
            setMyLocation({latitude: 37.5454, longitude: 127.1541 }); // 현우네밥집 주소 latitude: 37.5634, longitude: 126.9093 
        }

        async function mapData() {
            try {
                const response = await axios.post(
                    'http://15.164.28.246:8000/api/v1/stores/search/',
                    {
                        latitude: myLocation.latitude, 
                        longitude: myLocation.longitude
                    },
                    { headers : {
                        Authorization: await AsyncStorage.getItem('accessToken', (err, res) => 
                        {return(res);})
                    }},
                )
              .then(response => {
                setStoreList(response.data);
                setStore_id(storeList["data"][1].store_id);
                setStore_name(storeList["data"][1].store_name);
                setDistance(storeList["data"][1].distance);
                setWaiting(storeList["data"][1].waiting);
                setIs_waiting(storeList["data"][1].is_waiting);
                setInformation(storeList["data"][1].information);
                setLatitude(storeList["data"][1].latitude);
                setLongitude(storeList["data"][1].longitude);
                console.log(longitude)
                }
              )
              .catch(function (error) {
                console.log(error)
              });
            } catch (error) {
                console.log(error);
            }
        };
    }, []);

    function modal(){
        setModalOutput(storeList["data"][0].store_name)
        setModalVisible(true)
    }

    // ?는 두가지 타입을 한번에, !는 무조건 타입 지정
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
                    onPress={() => navigation.navigate('MapList', {mySite: mySite})}>
                    <Text style={mapStyles.buttonText}>
                        리스트로 보기
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={mapStyles.mapView}>
                <NaverMapView style={{width: '100%', height: '100%'}}
                            showsMyLocationButton={true}
                            center={{...Point,zoom: 16}} // ... 은 배열을 풀어준다.
                            onCameraChange={(e) => console.log(e.latitude, e.longitude)}
                >   
                    <View>
                        {markers.map((mark) =>
                            <Marker
                                key={mark.latitude}
                                coordinate={mark} 
                                onClick={() => modal()}
                            />
                        )}
                    </View>
                </NaverMapView>
                <Modal
                    //isVisible Props에 State 값을 물려주어 On/off control
                    isVisible={modalVisible}
                    //아이폰에서 모달창 동작시 깜박임이 있었는데, useNativeDriver Props를 True로 주니 해결되었다.
                    useNativeDriver={true}
                    hideModalContentWhileAnimating={true}
                    style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
                >
                    <View>
                        <TouchableOpacity
                            style={mapStyles.storeInformation}
                            onPress={() => {
                            setModalOutput(mySite.store_name);
                            setModalVisible(false);
                            navigation.navigate('Reservation', {mySite: mySite})
                            }}
                        >
                            <View style={mapStyles.storeContainer}>
                                <Text style={mapStyles.storeNameText}>
                                    {mySite.store_name}
                                </Text>
                                <Text style={mapStyles.storeDetailText}>
                                    대기 {mySite.waiting}팀
                                </Text>
                                <Text style={mapStyles.storeDistanceText}>
                                    {mySite.distance}m
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={mapStyles.cancel}
                            onPress={() => {
                            setModalVisible(false);
                            }}
                        >
                            <Text style={mapStyles.cancelText}>
                                취소
                            </Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
            </View>
        </View>
    ); 
};

export default MapView;