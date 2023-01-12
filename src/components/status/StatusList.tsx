import React from "react";
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../screens/RootStackParams';
import StatusListStyles from'../../styles/StatusStyles'
import ListTitle from'./ListTitle';
//import ListContent from './ListContent';

type ResgisterScreenProp = StackNavigationProp<RootStackParamList, 'Map'>;  //경로 설정?은 아직 못 하겠어여

function StatusList() {
    const navigation = useNavigation<ResgisterScreenProp>();

    return(
        <View>
            <ListTitle/>
            {/* <ListContent/> */}
        </View>
    );
};

export default StatusList;

