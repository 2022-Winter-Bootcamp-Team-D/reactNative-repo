import React, { useEffect, useState } from "react";
import {Text, TouchableOpacity, View} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../RootStackParams';
import StatusStyles from "../../styles/StatusStyles";
import ReservationScreenStyles from "../../styles/screens/ReservationScreenStyles";
import StatusListStyles from "../../styles/StatusListStyles";
import HomeButton from "../../components/status/HomeButton";
import statusStyles from "../../styles/StatusStyles";
import axios from "axios";
import AsyncStorage from "@react-native-community/async-storage";

type ResgisterScreenProp = StackNavigationProp<RootStackParamList, 'ReservationResult'>;

function ReservationResultScreen() {
    const navigation = useNavigation<ResgisterScreenProp>();
    type ScreenRouteProp = RouteProp<RootStackParamList,"ReservationResult">;
    const route = useRoute<ScreenRouteProp>();
    const [people, setPeople] = useState(0);
    // const [create_at, setCreate_at] = useState(Date);
    const [store_name, setStore_name] = useState('');
    const [waiting_id, setWaiting_id] = useState(0);
    const [waiting_order, setWaiting_order] = useState(0);

    useEffect(() => {
        setStore_name(route.params?.store_name)
        setPeople(route.params?.myResponse.people)
        setWaiting_id(route.params?.myResponse.waiting_id)
        setWaiting_order(route.params?.myResponse.waiting_order)
      }, []);

    async function patchCancelData() {
        try {
            const response = await axios.patch(
                'http://15.164.28.246:8000/api/v1/waitings/',
                { headers : {
                    Authorization: await AsyncStorage.getItem('accessToken', (err, res) => 
                    {return(res);})
                }},
            )
          .then(function (response) {
            // console.log(response)
          })
          .catch(function (error) {
            console.log(error);
          });
        } catch (error) {
            console.log(error);
        }
    };

    new Intl.DateTimeFormat('kr').format(new Date());
    const TIME_ZONE = 3240 * 10000;
    const d = new Date();
    const date = new Date(+d + TIME_ZONE).toISOString().split('T')[0];
    const time = d.toTimeString().split(' ')[0];

    return (
      <View style={ReservationScreenStyles.container}>
        <View style={StatusListStyles.titleContainer}>
                <Text style={StatusListStyles.listTitle}>
                    웨이팅 완료
                </Text>
                <HomeButton/>
            </View>
            <View style={StatusListStyles.listContainer}>
                <Text style={StatusListStyles.listContentText}>
                    대기번호
                </Text>
                <Text style={StatusListStyles.listContentTextNumber}>
                    {waiting_order} 번
                </Text>
            </View>
            <Text style={StatusListStyles.listContentMessage}>
                현재 내 앞에 {waiting_order-1}팀이 있어요
            </Text>
            <View style={StatusListStyles.ReceiptContainer}>
            <View>
                <Text style={StatusListStyles.ReceiptContentTitle}>
                    식당명 {'\n'}{'\n'}
                    접수 인원 {'\n'}{'\n'}
                    접수 시간
                </Text>
            </View>
            <View>
                <Text style={StatusListStyles.ReceiptContentText}>
                    {store_name} {'\n'}{'\n'}
                    {people} 명 {'\n'}{'\n'}
                    {date + ' ' + time}
                </Text>
            </View>
        </View>
          <View style={StatusStyles.ButtonContainer}>
            {/* <StatusDelayButton/> */}
            <TouchableOpacity
                style={statusStyles.cancelButton}
                onPress={() => patchCancelData()}
            >
                <Text style={statusStyles.cancelButtonText}>
                    대기 취소하기
                </Text>
            </TouchableOpacity>
          </View>
      </View>
    );
};

export default ReservationResultScreen;