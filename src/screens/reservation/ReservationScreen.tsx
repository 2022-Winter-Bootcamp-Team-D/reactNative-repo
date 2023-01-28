import React, {useState} from "react";
import {Text, TouchableOpacity, View} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../screens/RootStackParams';
import ReservationPeople from "../../components/reservation/ReservationPeople";
import CancelButton from "../../components/reservation/CancelButton";
import ReservationScreenStyles from "../../styles/screens/ReservationScreenStyles";
import API from "../../services/API";
import AsyncStorage from "@react-native-community/async-storage";
import reservationStyles from "../../styles/ReservationStyles";
import mapListStyles from "../../styles/MapListStyles";
import axios from "axios";
 
function ReservationScreen() {
    type ResgisterScreenProp = StackNavigationProp<RootStackParamList, 'Reservation'>;
    type ScreenRouteProp = RouteProp<RootStackParamList,'Reservation'>;
    const route = useRoute<ScreenRouteProp>();
    const navigation = useNavigation<ResgisterScreenProp>();
    const [people, setPeople] = useState(0);

    async function getFCMToken() {
        // 가져오기
        AsyncStorage.getItem('FCMToken', (err, FCMToken) => {
            console.log("[FCMToken] " + FCMToken);
            return(FCMToken);
        });
    }

    async function getAccessToken() {
      // 가져오기
      AsyncStorage.getItem('accessToken', (err, res) => {
        console.log("[accessToken] " + res);
        return(res);
      });
    }

    async function getRefreshToken() {
      // 가져오기
      AsyncStorage.getItem('refreshToken', (err, refreshToken) => {
        console.log("[refreshToken] " + refreshToken);
        return(refreshToken);
      });
    }

    async function postReservationData() {
        try {
            const response = await axios.post(
              'http://15.164.28.246:8000/api/v1/waitings/',
              {
                store_id: route.params?.mySite.store_id,
                people: route.params?.mySite.store_id,
                token: AsyncStorage.getItem('FCMToken', (err, FCMToken) => 
                  {return(FCMToken)})
              },
              { headers : {Authorization: 
                await AsyncStorage.getItem('accessToken', (err, res) => 
                {return(res)})
              }},
            )
          .then(async function (response) {
            const myResponse = response.data
            navigation.navigate('Status', {
              myResponse: myResponse, 
              store_name: route.params?.mySite.store_name
            })
          })
          .catch(function (error) {
            console.log(error);
            console.log(AsyncStorage.getItem('accessToken', (err, res) => 
            {return(res);}))
          });
        } catch (error) {
            console.log(error);
        }
    };

  return (
    <View style={ReservationScreenStyles.container}>
       <View style={reservationStyles.selectedStore}>
        <View style={mapListStyles.listTitle}>
            <Text style={reservationStyles.storeNameText}>
              {route.params?.mySite.store_name}
            </Text>
            <Text style={reservationStyles.waitingText}>
              대기 {route.params?.mySite.waiting} 팀
            </Text>
            <Text style={reservationStyles.storeDistanceText}>
              {route.params?.mySite.distance}m
            </Text>
          </View>
          <Text style={reservationStyles.storeDetail}>
            {route.params?.mySite.information}
          </Text>
        </View>
      <ReservationPeople
        people={people}
        setPeople={setPeople}
      />
      <TouchableOpacity
        style={reservationStyles.reservationButton}
        onPress={() => {
            postReservationData()
        }}
      >
        <Text style={reservationStyles.reservationButtonText}>
            웨이팅 시작할게요!
        </Text>
      </TouchableOpacity>
      <CancelButton/>
    </View>
  );
};

export default ReservationScreen;