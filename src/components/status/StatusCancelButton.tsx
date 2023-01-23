import React from "react";
import {View, TouchableOpacity, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../screens/RootStackParams';
import statusStyles from '../../styles/StatusStyles';

type ResgisterScreenProp = StackNavigationProp<RootStackParamList, 'Status'>;

function StatusCancelButton() {
    const navigation = useNavigation<ResgisterScreenProp>();
    
    return (
        <View >
            <TouchableOpacity
                style={statusStyles.cancelButton}
                onPress={() => navigation.navigate('Register')}
            >
                <Text style={statusStyles.cancelButtonText}>
                    대기 취소하기
                </Text>
            </TouchableOpacity>
        </View>
    );  
};

export default StatusCancelButton;