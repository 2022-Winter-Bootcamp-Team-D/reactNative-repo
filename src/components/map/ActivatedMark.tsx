import React, { useState } from "react";
import Modal from 'react-native-modal';
import {View, TouchableOpacity, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../screens/RootStackParams';

type ResgisterScreenProp = StackNavigationProp<RootStackParamList, 'Map'>;

import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import mapStyles from '../../styles/MapStyles';

function ActivatedMark() {
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    //Output을 State로 받아서 화면에 표출하거나 정보 값으로 활용
    const [modalOutput, setModalOutput] = useState<string>("");
    
    const navigation = useNavigation<ResgisterScreenProp>();

    const store_name = "트리아농";
    const waiting_order = "대기 3팀";
    const store_distance = "528m";

    return (
        <TouchableOpacity
            style={mapStyles.activateIcon}
        >
            <Modal
                //isVisible Props에 State 값을 물려주어 On/off control
                isVisible={modalVisible}
                //아이폰에서 모달창 동작시 깜박임이 있었는데, useNativeDriver Props를 True로 주니 해결되었다.
                useNativeDriver={true}
                hideModalContentWhileAnimating={true}
                style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
            >
                <View>
                    <TouchableOpacity
                        style={mapStyles.storeInformation}
                        onPress={() => {
                            setModalOutput(store_name);
                            setModalVisible(false);
                            navigation.navigate('Reservation')
                        }}
                    >
                        <View style={mapStyles.storeContainer}>
                            <Text style={mapStyles.storeNameText}>
                                {store_name}
                            </Text>
                            <Text style={mapStyles.storeDetailText}>
                                {waiting_order}
                            </Text>
                            <Text style={mapStyles.storeDistanceText}>
                                {store_distance}
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={mapStyles.cancel}
                        onPress={() => {
                        setModalVisible(false);
                        }}
                    >
                        <Text style={mapStyles.cancelText}>
                            취소
                        </Text>
                    </TouchableOpacity>
                </View>
            </Modal>

            <TouchableOpacity
                onPress={() => {
                setModalVisible(true);
                }}
            >
                <FontAwesomeIcon 
                    name = 'map-pin' 
                    size = {40} 
                    color = '#0eba39'
                />
                {/* 모달에서 선택 결과 값을 State로 받아서 화면에 표시 */}
                <Text style={mapStyles.markText}> 
                    {modalOutput}
                </Text>
            </TouchableOpacity>
        </TouchableOpacity>
    );
};

export default ActivatedMark;