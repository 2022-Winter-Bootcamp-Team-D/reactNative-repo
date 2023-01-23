import React, {useState} from "react";
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import ReservationStyles from "../../styles/ReservationStyles";
import ReservationScreenStyles from "../../styles/screens/ReservationScreenStyles";
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

function PasswordInput() {
    const [password, setPassword] = useState('');
    const [isRevealPwd, setIsRevealPwd] = useState(false);

    function hidePwdIcon() {
        return(
            <FontAwesomeIcon 
                    name = 'eye-slash' 
                    size = {30} 
                    color = 'black'
            />
        )
    };

    function showPwdIcon() {
        return(
            <FontAwesomeIcon 
                    name = 'eye' 
                    size = {30} 
                    color = 'black'
            />
        )
    };

    return (
        <View style={ReservationScreenStyles.PasswordInput}>
            <Text style={ReservationStyles.peopleTitle}>
                비밀번호 입력 (4자리)
            </Text>
            <View>
            {/* <View style={ReservationStyles.passwordContainer}> */}
                <TextInput
                    style={ReservationStyles.PasswordInput}
                    name="password"
                    placeholder="웨이팅에 사용하실 비밀번호를 입력해주세요."
                    autoCapitalize="none"
                    autoCorrect={false}
                    textContentType="newPassword"
                    secureTextEntry
                    type={isRevealPwd ? "text" : "password"}
                    value={password}
                    // enablesReturnKeyAutomatically
                    maxLength={4}
                    onChangeText={text => setPassword(text)}
                />
                {/* <Image
                    title={isRevealPwd ? "Hide password" : "Show password"}
                    src={isRevealPwd ? hidePwdIcon : showPwdIcon}
                    onClick={() => setIsRevealPwd(prevState => !prevState)}
                /> */}
            </View>
        </View>
    );  
};

export default PasswordInput;