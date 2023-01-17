import React, { useState } from "react";
import Modal from 'react-native-modal';
import {View, TouchableOpacity, Text} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import mapStyles from '../../styles/MapStyles';


function UnActivatedMark() {
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    //Output을 State로 받아서 화면에 표출하거나 정보 값으로 활용
    const [modalOutput, setModalOutput] = useState<string>("");
    
    return (
        <TouchableOpacity
            style={mapStyles.unactivateIcon}
        >
            <Modal
                //isVisible Props에 State 값을 물려주어 On/off control
                isVisible={modalVisible}
                //아이폰에서 모달창 동작시 깜박임이 있었는데, useNativeDriver Props를 True로 주니 해결되었다.
                useNativeDriver={true}
                hideModalContentWhileAnimating={true}
            >
                <View>
                    <TouchableOpacity
                        style={mapStyles.refuse}
                        onPress={() => {
                        setModalOutput("예약불가");
                        setModalVisible(false);
                        }}
                    >
                        <Text style={mapStyles.refuseText}>
                            웨이팅이 불가능합니다.
                        </Text>
                    </TouchableOpacity>



                    <TouchableOpacity
                        style={mapStyles.cancel}
                        onPress={() => {
                        setModalVisible(false);
                        }}
                    >
                        <Text style={mapStyles.cancelText}>
                            돌아가기
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
                    color = '#909090'
                />
                {/* <KakaoMapView 
                    markerImageName='UnActivatedMark'
                    width={0}
                    height={0}
                    markerList={[]} onChange={function (event: MapNativeEvent): void {
                        throw new Error("Function not implemented.");
                    } }                /> */}
                {/* 모달에서 선택 결과 값을 State로 받아서 화면에 표시 */}
                <Text style={mapStyles.markText}> 
                    {modalOutput}
                </Text>
            </TouchableOpacity>
        </TouchableOpacity>
    );
};
export default UnActivatedMark;