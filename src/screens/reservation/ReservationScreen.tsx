import React, {useState} from "react";
import {Text, TouchableOpacity, View} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../screens/RootStackParams';
import ReservationPeople from "../../components/reservation/ReservationPeople";
import PasswordInput from "../../components/reservation/PasswordInput";
import CancelButton from "../../components/reservation/CancelButton";
import ReservationScreenStyles from "../../styles/screens/ReservationScreenStyles";
import RegisterStyles from "../../styles/LoginStyles";
import API from "../../services/API";
import AsyncStorage from "@react-native-community/async-storage";
import reservationStyles from "../../styles/ReservationStyles";
import mapListStyles from "../../styles/MapListStyles";
 
function ReservationScreen() {
    type ResgisterScreenProp = StackNavigationProp<RootStackParamList, 'Reservation'>;
    type ScreenRouteProp = RouteProp<RootStackParamList,'Reservation'>;
    const route = useRoute<ScreenRouteProp>();
    const navigation = useNavigation<ResgisterScreenProp>();
    const [name, setName] = useState('');
    const [phoneNum, setPhoneNum] = useState('');
    const [people, setPeople] = useState(0);
    const [password, setPassword] = useState('');

    async function getFCMToken() {
        // 가져오기
        AsyncStorage.getItem('token', (err, result) => {
            console.log("토큰: " + result);
            return(result);
        });
    }
    
    const data = {
        store_id: 1,
        name: name,
        phoneNum: "01033333378",
        people: people,
        password: password,
        token: "token",
        withCredentials:true
    }

    async function postReservationData() {
        try {
            const response = await API.post(
                '/waiting/',
                data,
            )
          .then(function (response) {
            const myResponse = response.data
            navigation.navigate('Status', {myResponse: myResponse, store_name: route.params?.store_name})
          })
          .catch(function (error) {
            console.log(error);
          });
        } catch (error) {
            console.log(error);
        }
    };
    
    function userReservation(){
        console.log("이름: " + name)
        console.log("전화번호: " + phoneNum)
        console.log("비밀번호: " + password)
        console.log("예약인원: " + people + "명")
    };

  return (
    <View style={ReservationScreenStyles.container}>
       <View style={reservationStyles.selectedStore}>
        <View style={mapListStyles.listTitle}>
            <Text style={reservationStyles.storeNameText}>
              {route.params?.store_name}
            </Text>
            <Text style={reservationStyles.waitingText}>
              대기 {route.params?.waiting_order} 팀
            </Text>
            <Text style={reservationStyles.storeDistanceText}>
              {route.params?.store_distance}m
            </Text>
          </View>
          <Text style={reservationStyles.storeDetail}>
            {route.params?.store_detail}
          </Text>
        </View>
      <ReservationPeople
        people={people}
        setPeople={setPeople}
      />
      <PasswordInput
        setPassword={setPassword}
      />
        <TouchableOpacity
                style={RegisterStyles.registerButton}
                onPress={() => {
                    getFCMToken()
                    postReservationData()
                    userReservation()
                }}
        >
            <Text style={RegisterStyles.registerButtonText}>
                웨이팅 시작할게요!
            </Text>
        </TouchableOpacity>
      <CancelButton/>
    </View>
  );
};

export default ReservationScreen;