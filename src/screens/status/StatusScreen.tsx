import React from "react";
import {Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {RouteProp, useRoute} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../screens/RootStackParams';
import StatusDelayButton from "../../components/status/StatusDelayButton";
import ReceiptContent from "../../components/status/ReceiptContent";
import StatusCancelButton from "../../components/status/StatusCancelButton";
import StatusStyles from "../../styles/StatusStyles";
import ReservationScreenStyles from "../../styles/screens/ReservationScreenStyles";
import ListContent from "../../components/status/ListContent";
import StatusListStyles from "../../styles/StatusListStyles";
import HomeButton from "../../components/status/HomeButton";

function StatusScreen() {
    const {params: myResponse} = useRoute();
    console.log(myResponse);
    
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
                  1번
                </Text>
            </View>
            <Text style={StatusListStyles.listContentMessage}>
                현재 내 앞에 2팀이 있어요
            </Text>
        <ReceiptContent/>
          <View style={StatusStyles.ButtonContainer}>
            <StatusDelayButton/>
            <StatusCancelButton/>
          </View>
      </View>
    );
};

export default StatusScreen;