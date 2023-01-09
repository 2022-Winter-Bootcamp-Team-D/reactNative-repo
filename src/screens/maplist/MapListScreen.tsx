import React from "react";
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../screens/RootStackParams';

type ResgisterScreenProp = StackNavigationProp<RootStackParamList, 'MapList'>;


function MapListScreen() {
    const navigation = useNavigation<ResgisterScreenProp>();

    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>맵 리스트</Text>
        <Button title="지도로 보기" onPress={() => navigation.navigate('Main')} />
        </View>
    );
};

export default MapListScreen;