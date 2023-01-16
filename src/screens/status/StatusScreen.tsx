import React from "react";
import {Text, View} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';
import {RootStackParamList} from '../../screens/RootStackParams';
import StatusDelayButton from "../../components/status/StatusDelayButton";
import StatusCancelButton from "../../components/status/StatusCancelButton";
import StatusStyles from "../../styles/StatusStyles";
import ReservationScreenStyles from "../../styles/screens/ReservationScreenStyles";
import StatusListStyles from "../../styles/StatusListStyles";
import HomeButton from "../../components/status/HomeButton";

function StatusScreen() {
    type ScreenRouteProp = RouteProp<RootStackParamList,"Status">;
    const route = useRoute<ScreenRouteProp>();
    // const {params: myResponse} = useRoute();
    // console.log(myResponse);
    console.log(route.params?.waiting_id);
    
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
                    {route.params?.waiting_id}번
                </Text>
            </View>
            <Text style={StatusListStyles.listContentMessage}>
                현재 내 앞에 {route.params?.waiting_order}팀이 있어요
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
                    트리아농 {'\n'}{'\n'}
                    {route.params?.people}명 {'\n'}{'\n'}
                    {route.params?.create_at}
                </Text>
            </View>
        </View>
          <View style={StatusStyles.ButtonContainer}>
            <StatusDelayButton/>
            <StatusCancelButton/>
          </View>
      </View>
    );
};

export default StatusScreen;