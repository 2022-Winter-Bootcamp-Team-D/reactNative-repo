import React, { useEffect, useState } from "react";
import {View, Image, Alert} from 'react-native';
import mapStyles from '../../styles/MapStyles';
import NaverMapView, {Circle, Marker, Path, Polyline, Polygon} from "react-native-nmap";
import geolocation from 'react-native-geolocation-service';
import a from '../../../assets/images/LogoImage.png'

interface M0 {
    latitude: number;
    longitude: number;
}

function MapView() {

    const [myLocation, setMyLocation] = useState<M0>({latitude: 0, longitude: 0});

    //현재 위치를 추적합니다.
    useEffect(() => {
        if (geolocation) {
            geolocation.getCurrentPosition(success, error);
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
    }, []);
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
                         onTouch={() => console.warn('onTouch')}
                         onCameraChange={(e) => console.warn(e.latitude, e.longitude)}
            >
             {/* onCameraChange?: (event: {
                latitude: number;
                longitude: number;
                zoom: number;
                contentsRegion: [Coord, Coord, Coord, Coord, Coord];
                coveringRegion: [Coord, Coord, Coord, Coord, Coord];
            }) => void; */}

                <Marker coordinate={P0} 
                // image={Myplace}
                onClick={() => console.warn('onClick! p0')}/>
                <Marker coordinate={P1} 
                    pinColor="blue"
                    caption={{textSize:8, color: "black"}}
                    onClick={() => console.warn('onClick! p1')}
                />
                <Marker coordinate={P2} pinColor="red" onClick={() => console.warn('onClick! p2')}/>
            </NaverMapView>
        </View>
    ); 
};

export default MapView;