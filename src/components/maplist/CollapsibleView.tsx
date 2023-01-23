import React from "react";
import {View, TouchableOpacity, Text} from 'react-native';
import {Collapse,CollapseHeader, CollapseBody} from 'accordion-collapse-react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../screens/RootStackParams';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import mapListScreenStyles from "../../styles/screens/MapListScreenStyles";
import mapListStyles from "../../styles/MapListStyles";
import mapStyles from "../../styles/MapStyles";

type ResgisterScreenProp = StackNavigationProp<RootStackParamList, 'Map'>;

function CollapesibleView() {
    const navigation = useNavigation<ResgisterScreenProp>();
    const store_name = "트리아농";
    const waiting_order = 3;
    const store_distance = 528;
    const store_detail = "제주산 청정 생고기로 만든 추억의 돈까스!";

    return(
        <View style={mapListScreenStyles.listContainer}>
            <Collapse>
                <CollapseHeader>
                <View style={mapListStyles.listTitle}>
                    <Text style={mapStyles.storeNameText}>
                        {store_name}
                    </Text>
                    <Text style={mapListStyles.waitingText}>
                        대기 {waiting_order}팀
                    </Text>
                    <Text style={mapListStyles.storeDistanceText}>
                        {store_distance}m
                    </Text>
                    <View style={mapListStyles.hideDetail}>
                        <FontAwesomeIcon 
                            name = 'chevron-down'
                            size = {20} 
                            color = 'gray'
                        />
                    </View>
                </View>
                </CollapseHeader>
                <CollapseBody>
                    <Text style={mapListStyles.storeDetailText}>
                        {store_detail}
                    </Text>
                    <TouchableOpacity 
                        style={mapListStyles.reservationButton}
                        onPress={() => 
                            navigation.navigate(
                            'Reservation', 
                            {store_name: store_name, 
                            waiting_order: waiting_order, 
                            store_distance: store_distance, 
                            store_detail: store_detail
                            })
                        }>
                        <Text style={mapListStyles.reservationText}>
                            예약하기
                        </Text>
                    </TouchableOpacity>
                </CollapseBody>
            </Collapse>
        </View>
    );
};

export default CollapesibleView;