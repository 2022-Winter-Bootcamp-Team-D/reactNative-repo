import React from "react";
import {Text, TouchableOpacity, View} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../screens/RootStackParams';
import StatusDelayButton from "../../components/status/StatusDelayButton";
import StatusCancelButton from "../../components/status/StatusCancelButton";
import StatusStyles from "../../styles/StatusStyles";
import ReservationScreenStyles from "../../styles/screens/ReservationScreenStyles";
import StatusListStyles from "../../styles/StatusListStyles";
import HomeButton from "../../components/status/HomeButton";
import statusStyles from "../../styles/StatusStyles";
import API from "../../services/API";

type ResgisterScreenProp = StackNavigationProp<RootStackParamList, 'Status'>;

function StatusScreen() {
    const navigation = useNavigation<ResgisterScreenProp>();
    type ScreenRouteProp = RouteProp<RootStackParamList,"Status">;
    const route = useRoute<ScreenRouteProp>();

    new Intl.DateTimeFormat('kr').format(new Date());
    const TIME_ZONE = 3240 * 10000;
    const d = new Date(route.params?.myResponse.create_at);
    const date = new Date(+d + TIME_ZONE).toISOString().split('T')[0];
    const time = d.toTimeString().split(' ')[0];
    console.log(date + ' ' + time);

    async function patchCancelData() {
        try {
            const response = await API.patch(
                '/waiting/',
                {waiting_id: route.params?.myResponse.waiting_id,
                store_id: 1}
            )
          // .then((response) => response.json())
          // .then((responseJson) => )
          
          .then(function (response) {
            const cancelResponse = response.data
            console.log(cancelResponse)
            navigation.navigate('Main', )
          })
          .catch(function (error) {
            console.log(error);
          });
        } catch (error) {
            console.log(error);
        }
    };

    return (
      <View style={ReservationScreenStyles.container}>
        <View style={StatusListStyles.titleContainer}>
                <Text style={StatusListStyles.listTitle}>
                    대기 신청 완료
                </Text>
                <HomeButton/>
            </View>
            <View style={StatusListStyles.listContainer}>
                <Text style={StatusListStyles.listContentText}>
                    대기번호
                </Text>
                <Text style={StatusListStyles.listContentTextNumber}>
                    {route.params?.myResponse.waiting_id}번
                </Text>
            </View>
            <Text style={StatusListStyles.listContentMessage}>
                현재 내 앞에 {route.params?.myResponse.waiting_order}팀이 있어요
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
                    {route.params?.store_name} {'\n'}{'\n'}
                    {route.params?.myResponse.people}명 {'\n'}{'\n'}
                    {date + ' ' + time}
                </Text>
            </View>
        </View>
          <View style={StatusStyles.ButtonContainer}>
            <StatusDelayButton/>
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

export default StatusScreen;