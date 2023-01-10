import React from "react";
import {TouchableOpacity, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../screens/RootStackParams';

type ResgisterScreenProp = StackNavigationProp<RootStackParamList, 'Map'>;


import mapStyles from '../../styles/MapStyles';

function MapListButton() {
    const navigation = useNavigation<ResgisterScreenProp>();

    return (
        <TouchableOpacity 
            style={mapStyles.mapListButton}
            onPress={() => navigation.navigate('MapList')}>
            <Text style={mapStyles.buttonText}>
                리스트로 보기
            </Text>
        </TouchableOpacity>
    );
};

export default MapListButton;