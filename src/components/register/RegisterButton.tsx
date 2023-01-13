import React from "react";
import {View, TouchableOpacity, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../screens/RootStackParams';
import messaging from '@react-native-firebase/messaging';
import RegisterStyles from '../../styles/RegisterStyles';

type ResgisterScreenProp = StackNavigationProp<RootStackParamList, 'Register'>;

    async function onAppBootstrap() {
        // Register the device with FCM
        await messaging().registerDeviceForRemoteMessages();
      
        // Get the token
        const token = await messaging().getToken();

        // Save the token
        // await postToApi('/users/1234/tokens', { token });
        console.log('[Token]' + token)
        return (token)
    }

function RegisterButton() {

    const navigation = useNavigation<ResgisterScreenProp>();
    
    return (
        <View >
            <TouchableOpacity
                    style={RegisterStyles.registerButton}
                    onPress={() => {
                        onAppBootstrap()
                        navigation.navigate('Main')
                    }}
                >
                     <Text style={RegisterStyles.registerButtonText}>
                        웨이팅 등록
                    </Text>
                </TouchableOpacity>
        </View>
    );  
};

export default RegisterButton;