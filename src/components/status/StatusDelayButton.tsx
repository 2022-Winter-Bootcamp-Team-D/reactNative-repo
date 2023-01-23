import React from "react";
import {View, TouchableOpacity, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../screens/RootStackParams';
import statusStyles from '../../styles/StatusStyles';
import API from "../../services/API";

type ResgisterScreenProp = StackNavigationProp<RootStackParamList, 'Status'>;

function StatusDelayButton() {

    const navigation = useNavigation<ResgisterScreenProp>();
    

    // 임시로 API만 박아둠
    const data = {
    }

    async function patchDelayData() {
        try {
            const response = await API.patch(
                '/waitings/delay',
                data
            )
          .then(function (response) {
            console.log(response.data);
          })
          .catch(function (error) {
            console.log(error);
          });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <View >
            <TouchableOpacity
                    style={statusStyles.delayButton}
                        onPress={() => {
                            patchDelayData()
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