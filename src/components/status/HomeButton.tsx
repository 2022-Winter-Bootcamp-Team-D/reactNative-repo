import React from "react";
import {TouchableOpacity, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../screens/RootStackParams';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import StatusListStyles from "../../styles/StatusListStyles";

type ResgisterScreenProp = StackNavigationProp<RootStackParamList, 'Map'>;

function HomeButton() {
    const navigation = useNavigation<ResgisterScreenProp>();

    return (
        <TouchableOpacity style = {StatusListStyles.HomeButton}
            onPress={() => navigation.navigate('Main')}>
            <FontAwesomeIcon 
                name = 'home' 
                size = {40} 
                color = 'black'
            />
        </TouchableOpacity>
    );
};

export default HomeButton;