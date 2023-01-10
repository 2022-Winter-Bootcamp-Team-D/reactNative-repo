import React from "react";
import {View, TouchableOpacity, Text} from 'react-native';
import {Collapse,CollapseHeader, CollapseBody} from 'accordion-collapse-react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../screens/RootStackParams';
import ListTitle from "./ListTitle";
import ListDetail from "./ListDetail";
import mapListScreenStyles from "../../styles/screens/MapListScreenStyles";
import mapListStyles from "../../styles/MapListStyles";

type ResgisterScreenProp = StackNavigationProp<RootStackParamList, 'Map'>;

function CollapesibleView() {
    const navigation = useNavigation<ResgisterScreenProp>();

    return(
        <View style={mapListScreenStyles.listContainer}>
            <Collapse>
                <CollapseHeader>
                    <ListTitle/>
                </CollapseHeader>
                <CollapseBody>
                    <ListDetail/>
                    <TouchableOpacity 
                        style={mapListStyles.reservationButton}
                        onPress={() => navigation.navigate('Reservation')}>
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