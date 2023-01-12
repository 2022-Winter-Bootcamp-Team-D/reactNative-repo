import React from "react";
import {View, TouchableOpacity, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../screens/RootStackParams';
import statusStyles from '../../styles/StatusStyles';

type ResgisterScreenProp = StackNavigationProp<RootStackParamList, 'Status'>;

function StatusDelayButton() {

    const navigation = useNavigation<ResgisterScreenProp>();
    
    return (
        <View >
            <TouchableOpacity
                    style={statusStyles.delayButton}
                        onPress={() => {
                            navigation.navigate('Status')
                        }}
                >
                    <Text style={statusStyles.delayButtonText}>
                        순서 미루기
                    </Text>
                </TouchableOpacity>
        </View>
    );  
};

export default StatusDelayButton;