import React, {useEffect, useState} from "react";
import {View, ScrollView, Text, TouchableOpacity} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../screens/RootStackParams';
import geolocation from 'react-native-geolocation-service';
import {Collapse,CollapseHeader, CollapseBody} from 'accordion-collapse-react-native';
import SearchBar from "../../components/search/SearchBar";
import mapListStyles from "../../styles/MapListStyles";
import SearchScreenStyles from "../../styles/screens/SearchScreenStyles";
import SearchStyles from "../../styles/SearchStyles";
import mapStyles from "../../styles/MapStyles";
import AsyncStorage from "@react-native-community/async-storage";
import API from "../../services/API";
import axios from "axios";

type ResgisterScreenProp = StackNavigationProp<RootStackParamList, 'SearchResult'>;
type ScreenRouteProp = RouteProp<RootStackParamList,'SearchResult'>;
interface M0 {
  latitude: number;
  longitude: number;
}

function SearchResultScreen() {
  const [search, setSearch] = useState('');
  const navigation = useNavigation<ResgisterScreenProp>();
  const route = useRoute<ScreenRouteProp>();
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
    setSearch(route.params?.search)

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
        setMyLocation({latitude: 37.5488, longitude: 127.1717}); // 현우네밥집 주소 latitude: 37.5634, longitude: 126.9093 
    }

    async function mapData() {
        try {
            const response = await axios.get(
                `http://15.164.28.246:8000/api/v1/stores/searchword/`,
                // {
                //     token: await AsyncStorage.getItem('FCMToken', (err, res) => 
                //             {return(res);}),
                //     search: search,
                //     latitude: myLocation.latitude,
                //     longitude: myLocation.longitude
                // },
                { headers : {
                  Authorization: await AsyncStorage.getItem('accessToken', (err, res) => 
                                {return(res);})
              }},)
          .then(function (response) {
            setStoreList(response.data);
            setMyStoreList(storeList["data"])
            console.log(myStoreList)
          })
          .catch(function (error) {
            console.log(error)
          });
        } catch (error) {
            console.log(error);
        }
        }}, []);

  return (
    <ScrollView style={SearchScreenStyles.container}>
      <Text style={SearchStyles.searchTitle}>
        검색
      </Text>
      <SearchBar/>
      {myStoreList&&myStoreList.map((e) =>
        <View key={e.store_id}>
          <Collapse>
              <CollapseHeader>
                  <View style={mapListStyles.listTitle}>
                      <Text style={mapListStyles.number}>
                          {e.store_id}
                      </Text>
                      <Text style={mapListStyles.storeNameText}>
                          {e.store_name}
                      </Text>
                      <Text style={mapListStyles.waitingText}>
                          대기 {e.waiting}팀
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
                          예약하기
                      </Text>
                  </TouchableOpacity>
              </CollapseBody>
          </Collapse>
          <View style={mapListStyles.verticalLine}/> 
      </View> 
       )}
    </ScrollView>
  );
};

export default SearchResultScreen;