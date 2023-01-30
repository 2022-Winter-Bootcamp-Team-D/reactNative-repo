import React, {useEffect, useState} from "react";
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
    const [store_id, setStore_id] = useState(0);
    const [store_name, setStore_name] = useState('');
    const [distance, setDistance] = useState(0);
    const [waiting, setWaiting] = useState(0);
    const [information, setInformation] = useState('');
    const [is_waiting, setIs_waiting] = useState(true);

    useEffect(() => {
      setStore_id(route.params?.mySite.store_id)
      setStore_name(route.params?.mySite.store_name)
      setWaiting(route.params?.mySite.waiting)
      setDistance(route.params?.mySite.distance)
      setInformation(route.params?.mySite.information)
    }, []);

    async function postReservationData() {
        try {
            const response = await axios.post(
              'http://15.164.28.246:8000/api/v1/waitings/',
              {
                store_id: store_id,
                people: people,
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
            navigation.navigate('ReservationResult', {
              myResponse: myResponse,
              store_name: store_name
            })
          })
          .catch(function (error) {
            console.log(error);
            // navigation.navigate('ReservationResult', {
            //   store_name: "스윗솔트",
            //   people: people,
            //   waiting_order: 6,
            //   store_name: store_name
            // })
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
              {store_name}
            </Text>
            <Text style={reservationStyles.waitingText}>
              대기 {waiting} 팀
            </Text>
            <Text style={reservationStyles.storeDistanceText}>
              {Math.round(distance)}m
            </Text>
          </View>
          <Text style={reservationStyles.storeDetail}>
            {information}
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