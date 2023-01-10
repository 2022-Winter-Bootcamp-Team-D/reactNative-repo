import React from "react";
import {View, TouchableOpacity, Text} from 'react-native';
import {Collapse,CollapseHeader, CollapseBody} from 'accordion-collapse-react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../screens/RootStackParams';
import ListTitle from "../maplist/ListTitle";
import ListDetail from "../maplist/ListDetail";
import mapListScreenStyles from "../../styles/screens/MapListScreenStyles";
import mapListStyles from "../../styles/MapListStyles";
import ReservationStyles from "../../styles/ReservationStyles";

type ResgisterScreenProp = StackNavigationProp<RootStackParamList, 'Map'>;

function StoreTitle() {
    const navigation = useNavigation<ResgisterScreenProp>();

    return(
        <View style={ReservationStyles.storeTitle}>
            <Collapse>
                <CollapseHeader>
                    <ListTitle/>
                </CollapseHeader>
                <CollapseBody>
                    <ListDetail/>
                </CollapseBody>
            </Collapse>
        </View>
    );
};

export default StoreTitle;