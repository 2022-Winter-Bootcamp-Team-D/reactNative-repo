import React, { useEffect, useState } from "react";
import {View, Text, TextInput} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../screens/RootStackParams';
import AsyncStorage from "@react-native-community/async-storage";
import geolocation from 'react-native-geolocation-service';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import SearchScreenStyles from "../../styles/screens/SearchScreenStyles";
import SearchStyles from "../../styles/SearchStyles";
import API from "../../services/API";
import axios from "axios";

type ResgisterScreenProp = StackNavigationProp<RootStackParamList, 'Search'>;
interface M0 {
  latitude: number;
  longitude: number;
}

function SearchScreen() {
  const [search, setSearch] = useState('');
  const [myLocation, setMyLocation] = useState<M0>({latitude: 0, longitude: 0});
  const navigation = useNavigation<ResgisterScreenProp>();

  const onPress = () => {{
    navigation.navigate('SearchResult')
  }}

  async function getFCMToken() {
    // 가져오기
    AsyncStorage.getItem('FCMToken', (err, FCMToken) => {
        console.log("[FCMToken] " + FCMToken);
        return(FCMToken);
    });
  }

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
        setMyLocation({latitude: 37.5488, longitude: 127.1717 }); // 현우네밥집 주소 latitude: 37.5634, longitude: 126.9093 
    }

    async function mapData() {
        try {
            const response = await axios.post<MySite>(
                'http://15.164.28.246:8000/api/v1/stores/search/',
                {
                    token: AsyncStorage.getItem('FCMToken'),
                    latitude: myLocation.latitude, 
                    longitude: myLocation.longitude
                },
                { headers : {Authorization: await AsyncStorage.getItem('accessToken')}},
            )
          .then(function (response) {
            console.log(success)
            const mySite = response.data
            console.log(mySite)
          })
          .catch(function (error) {
            console.log(error)
          });
        } catch (error) {
            console.log(error);
        }
    };
}, []);
  async function loginAPI() {
    try {
        const response = await axios.post(
            'localhost:8000/api/v1/map/?search={word}&lat={latitude}&long={longitude}/',
            {
            token: getFCMToken(),
            search: search,
            latitude: 123,
            longitude: 123
            },
        )
        .then(function (response) {
            onPress()
        })
        .catch(function (error) {
            console.log(error);
        });
    } catch (error) {
        console.log(error);
    }
};

  return (
    <View style={SearchScreenStyles.container}>
      <Text style={SearchStyles.searchTitle}>
        검색
      </Text>
      <View style={SearchStyles.searchBar}>
        <FontAwesomeIcon
          style={SearchStyles.searchIcon}
          name='search' 
          size={20} 
          color='gray'
        />
        <TextInput
          style={SearchStyles.searchSection}
          placeholder='매장을 검색해 보세요'
          onSubmitEditing={onPress}
          returnKeyType="search"
          value={search}
          onChangeText={(search) => {setSearch(search)}}
        />
      </View>
    </View>
  );
};

export default SearchScreen;