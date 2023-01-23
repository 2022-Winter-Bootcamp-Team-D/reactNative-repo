import React, { useState } from "react";
import Modal from 'react-native-modal';            
import {View, TouchableOpacity, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../screens/RootStackParams';
import mapStyles from '../../styles/MapStyles';

type ResgisterScreenProp = StackNavigationProp<RootStackParamList, 'Map'>;

function SuccessModal (modalVisible: any){
    const [modal, setModalVisible] = useState<boolean>(false);
    //Output을 State로 받아서 화면에 표출하거나 정보 값으로 활용
    const [modalOutput, setModalOutput] = useState<string>("");
    
    const [markStoreName, setMarkStoreName] = useState('');

    const navigation = useNavigation<ResgisterScreenProp>();
    return (
        
            <Modal
                //isVisible Props에 State 값을 물려주어 On/off control
                isVisible={modal}
                //아이폰에서 모달창 동작시 깜박임이 있었는데, useNativeDriver Props를 True로 주니 해결되었다.
                useNativeDriver={true}
                hideModalContentWhileAnimating={true}
                style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
            >
                <View>
                    <TouchableOpacity
                        style={mapStyles.storeInformation}
                        onPress={() => {
                        setModalOutput(markStoreName);
                        setModalVisible(false);
                        navigation.navigate('Reservation')
                        }}
                    >
                        <View style={mapStyles.storeContainer}>
                            <Text style={mapStyles.storeNameText}>
                                {markStoreName}
                            </Text>
                            <Text style={mapStyles.storeDetailText}>
                                대기 3팀
                            </Text>
                            <Text style={mapStyles.storeDistanceText}>
                                528m
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
    );
};

export default SuccessModal;