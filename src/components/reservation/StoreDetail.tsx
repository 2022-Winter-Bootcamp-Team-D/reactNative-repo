import React from "react";
import {Text} from 'react-native';
import mapListStyles from '../../styles/MapListStyles';
import ReservationStyles from "../../styles/ReservationStyles";

function ListDetail() {
    return (
        <Text style={ReservationStyles.storeDetail}>
            제주산 청정 생고기로 만든 추억의 돈까스!
            {"\n"}
            브레이크 타임: 월~금 오후 3시 ~ 5시 주말 공휴일 휴무
        </Text>
    );
};

export default ListDetail;