import React, { useEffect, useState } from "react";
import Modal from 'react-native-modal';
import {View, Image, Alert, TouchableOpacity, Text, InteractionManager} from 'react-native';
import mapStyles from '../../styles/MapStyles';
import NaverMapView, {Circle, Marker, Path, Polyline, Polygon} from "react-native-nmap";
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../screens/RootStackParams';
import geolocation from 'react-native-geolocation-service';
import SuccessModal from "./SuceesModal";
import API from "../../services/API";
import { ScreenContainer } from "react-native-screens";
import mapScreenStyles from "../../styles/screens/MapScreenStyles";

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
}

function MapView() {
    const [myLocation, setMyLocation] = useState<M0>({latitude: 0, longitude: 0});
    const [modalVisible, setModalVisible] = useState(false);
    //Output을 State로 받아서 화면에 표출하거나 정보 값으로 활용
    const [modalOutput, setModalOutput] = useState<string>("");
    const navigation = useNavigation<ResgisterScreenProp>();

    const mySite = {
        store_id: 1,
        store_name : "트리아농",
        distance: 528,       // 나와의 떨어진 거리
        waiting: 3,        // 현재 웨이팅을 받고 있는지?
        is_waiting: true,
        information : "안녕",
        my_position: "성남시 분당구"
    }

    const markers = [
        {
            latitude: 37.5489,
		    longitude: 127.1710
        },
        {
            latitude: 37.5500,
		    longitude: 127.1710
        },
        {
            latitude: 37.5480,
		    longitude: 127.1700
        },
        {
            latitude: 37.5487,
		    longitude: 127.1720
        },
        // {
        //     latitude: ,
		//     longitude: 
        // },
    ]

    //현재 위치를 추적합니다.
    useEffect(() => {
        if (geolocation) {
            geolocation.getCurrentPosition(success, error);
            mapData;
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
            setMyLocation({latitude: 37.5488, longitude: 127.1717 }); // 현우네밥집 주소 latitude: 37.5634, longitude: 126.9093 
        }

        async function mapData() {
            try {
                const response = await API.post<MySite>(
                    'http://10.0.2.2:8000/api/v1/stores/search/',
                    {
                        latitude: myLocation.latitude, 
                        longitude: myLocation.longitude
                    }
                )
              .then(function (response) {
                const MapResponse = response.data
                console.log(MapResponse)
                console.log('성공')
              })
              .catch(function (error) {
                console.log(error);
              });
            } catch (error) {
                console.log(error);
            }
        };
    }, []);

    function modal(){
        setModalOutput(mySite.store_name)
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
                        {markers.map((e) =>
                            <Marker
                                coordinate={e} 
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
                            navigation.navigate('Reservation')
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