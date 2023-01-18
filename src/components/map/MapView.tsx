import React, { useEffect, useState } from "react";
import {View, Image, Alert} from 'react-native';
import mapStyles from '../../styles/MapStyles';
import NaverMapView, {Circle, Marker, Path, Polyline, Polygon} from "react-native-nmap";
import geolocation from 'react-native-geolocation-service';

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
    const P0 = {latitude: 37.564362, longitude: 126.977011};
    const P1 = {latitude: 37.565051, longitude: 126.978567};
    const P2 = {latitude: 37.565383, longitude: 126.976292};

    return (
        <View style={mapStyles.mapView}>
           <NaverMapView style={{width: '100%', height: '100%'}}
                         showsMyLocationButton={true}
                         center={{...Point,zoom: 16}} // ... 은 배열을 풀어준다.
                         onTouch={() => console.warn('onTouch')}
                        //  onCameraChange={e => console.warn('onCameraChange', JSON.stringify(e))}
                        //  onMapClick={e => console.warn('onMapClick', JSON.stringify(e))}
            >
                <Marker coordinate={P0} onClick={() => console.warn('onClick! p0')}/>
                <Marker coordinate={P1} pinColor="blue" onClick={() => console.warn('onClick! p1')}/>
                <Marker coordinate={P2} pinColor="red" onClick={() => console.warn('onClick! p2')}/>
                <Path coordinates={[P0, P1]} onClick={() => console.warn('onClick! path')} width={10}/>
                <Polyline coordinates={[P1, P2]} onClick={() => console.warn('onClick! polyline')}/>
                {/* <Circle coordinate={P0} color ={"#d6efccdd1"} outlineWidth={10} outlineColor={"#f762624b"} radius={100} onClick={() => console.warn('onClick! circle')}/>
                <Polygon coordinates={[P0, P1, P2]} color={`rgba(0, 0, 0, 0.5)`} onClick={() => console.warn('onClick! polygon')}/> */}
            </NaverMapView>
        </View>
    ); 
};

export default MapView;