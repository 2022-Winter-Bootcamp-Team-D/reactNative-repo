import React from "react";
import {View} from 'react-native';
import {Collapse,CollapseHeader, CollapseBody} from 'accordion-collapse-react-native';

import ListTitle from "./ListTitle";
import ListDetail from "./ListDetail";
import mapListScreenStyles from "../../styles/screens/MapListScreenStyles";

function CollapesibleView() {
    return(
        <View style={mapListScreenStyles.listContainer}>
            <Collapse>
                <CollapseHeader>
                    <ListTitle/>
                </CollapseHeader>
                <CollapseBody>
                    <ListDetail/>
                </CollapseBody>
            </Collapse>
        </View>
    );
};

export default CollapesibleView;