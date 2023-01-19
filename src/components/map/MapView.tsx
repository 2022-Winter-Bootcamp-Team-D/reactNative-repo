import React, { useEffect, useState } from "react";
import Modal from 'react-native-modal';
import {View, Image, Alert, TouchableOpacity, Text} from 'react-native';
import mapStyles from '../../styles/MapStyles';
import NaverMapView, {Circle, Marker, Path, Polyline, Polygon} from "react-native-nmap";
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../screens/RootStackParams';
import geolocation from 'react-native-geolocation-service';
import SuccessModal from "./SuceesModal";
import API from "../../services/API";

type ResgisterScreenProp = StackNavigationProp<RootStackParamList, 'Map'>;

interface M0 {
    latitude: number;
    longitude: number;
}

interface data {
    store_id: number,
    store_name : string,
    distance: number,       // 나와의 떨어진 거리
    waiting: number,        // 현재 웨이팅을 받고 있는지?
    is_waiting: boolean,
    information : string
}

function MapView() {
    const [myLocation, setMyLocation] = useState<M0>({latitude: 0, longitude: 0});
    const [modalVisible, setModalVisible] = useState(false);
    //Output을 State로 받아서 화면에 표출하거나 정보 값으로 활용
    const [modalOutput, setModalOutput] = useState<string>("");
    
    const navigation = useNavigation<ResgisterScreenProp>();

    const data = {
        store_id: 1,
        store_name : "트리아농",
        distance: 528,       // 나와의 떨어진 거리
        waiting: 3,        // 현재 웨이팅을 받고 있는지?
        is_waiting: true,
        information : "안녕"
    }

    //현재 위치를 추적합니다.
    useEffect(() => {
        if (geolocation) {
            geolocation.getCurrentPosition(success, error);
            mapData()
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
            setMyLocation({ latitude: 37.5488, longitude: 127.1717 }); // 현우네밥집 주소 latitude: 37.5634, longitude: 126.9093 
            console.log (myLocation)
        }

        async function mapData() {
            try {
                const response = await API.post<data>(
                    'http://10.0.2.2:8000/api/v1/stores/search/',
                    {
                        latitude: myLocation.latitude, 
                        longitude: myLocation.longitude
                    }
                )
              .then(function (response) {
                console.log(response.data)
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
        setModalOutput(data.store_name)
        setModalVisible(true)
    }

    // ?는 두가지 타입을 한번에, !는 무조건 타입 지정
    const Point = {latitude: myLocation.latitude, longitude: myLocation.longitude}; 
    const P0 = {latitude: 37.5489, longitude: 127.1717};
    const P1 = {latitude: 37.5500, longitude: 127.1718};
    const P2 = {latitude: 37.5480, longitude: 127.1700};

    return (
        <View style={mapStyles.mapView}>
           <NaverMapView style={{width: '100%', height: '100%'}}
                        showsMyLocationButton={true}
                        center={{...Point,zoom: 16}} // ... 은 배열을 풀어준다.
                        onCameraChange={(e) => console.log(e.latitude, e.longitude)}
            >
                <Marker coordinate={P0} 
                    onClick={() => modal()}
                />
                <Marker coordinate={P1} 
                    pinColor="blue"
                    onClick={() => modal()}
                />
                <Marker coordinate={P2} 
                    pinColor="red" 
                    onClick={() => modal()}
                />
            </NaverMapView>
            <View>
                
            </View>
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
                        setModalOutput(data.store_name);
                        setModalVisible(false);
                        navigation.navigate('Reservation')
                        }}
                    >
                        <View style={mapStyles.storeContainer}>
                            <Text style={mapStyles.storeNameText}>
                                {data.store_name}
                            </Text>
                            <Text style={mapStyles.storeDetailText}>
                                대기 {data.waiting}팀
                            </Text>
                            <Text style={mapStyles.storeDistanceText}>
                                {data.distance}m
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
    ); 
};

export default MapView;