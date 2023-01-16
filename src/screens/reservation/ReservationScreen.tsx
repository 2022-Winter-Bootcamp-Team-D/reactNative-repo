import React, {useState} from "react";
import {Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../screens/RootStackParams';
import ReservationPeople from "../../components/reservation/ReservationPeople";
import PasswordInput from "../../components/reservation/PasswordInput";
import CancelButton from "../../components/reservation/CancelButton";
import ReservationScreenStyles from "../../styles/screens/ReservationScreenStyles";
import SelectedStore from "../../components/reservation/SelectedStore";
import RegisterStyles from "../../styles/RegisterStyles";
import API from "../../services/API";
import AsyncStorage from "@react-native-community/async-storage";

type ResgisterScreenProp = StackNavigationProp<RootStackParamList, 'Reservation'>;

function ReservationScreen() {
  const navigation = useNavigation<ResgisterScreenProp>();
    const [name, setName] = useState('');
    const [phoneNum, setPhoneNum] = useState('');
    const [people, setPeople] = useState(0);
    const [password, setPassword] = useState('');

    async function getFCMToken() {
        // 가져오기
        AsyncStorage.getItem('token', (err, result) => {
            console.log(result);
            return(result);
        });
    }
    
    const data = {
        store_id: 1,
        name: name,
        phoneNum: phoneNum,
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
            console.log(response.data);
            navigation.navigate('Status')
          })
          .catch(function (error) {
            console.log(error);
          });
        } catch (error) {
            console.log(error);
        }
    };

    function userReservation(){
        console.log("비밀번호:" + password)
        console.log("예약인원:" + people + "명")
    }
    
  return (
    <View style={ReservationScreenStyles.container}>
      <SelectedStore/>
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