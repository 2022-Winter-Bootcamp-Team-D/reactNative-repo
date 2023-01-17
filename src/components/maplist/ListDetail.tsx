import React from "react";
import {Text} from 'react-native';
import mapListStyles from '../../styles/MapListStyles';

function ListDetail() {
    const store_detail = "제주산 청정 생고기로 만든 추억의 돈까스!";

    return (
        <Text style={mapListStyles.storeDetailText}>
            {store_detail}
        </Text>
    );
};

export default ListDetail;