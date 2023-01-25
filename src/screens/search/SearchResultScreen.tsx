import React from "react";
import {View, ScrollView, Text, TouchableOpacity} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../screens/RootStackParams';
import {useNavigation} from '@react-navigation/native';
import {Collapse,CollapseHeader, CollapseBody} from 'accordion-collapse-react-native';
import SearchBar from "../../components/search/SearchBar";
import mapListStyles from "../../styles/MapListStyles";
import SearchScreenStyles from "../../styles/screens/SearchScreenStyles";
import SearchStyles from "../../styles/SearchStyles";
import mapStyles from "../../styles/MapStyles";

function SearchResultScreen() {
type ScreenRouteProp = RouteProp<RootStackParamList,'MapList'>;
  // const navigation = useNavigation<ResgisterScreenProp>();
  // const route = useRoute<ScreenRouteProp>();
  const searchStoreList = [
    {
      store_id: 1,
      store_name : "짜장면",
      waiting: 3,
      distance: 800,
      information : "안녕",
    },
    {
        store_id: 2,
        store_name : "돼지국밥집",
        waiting: 5,
        distance: 1000,
        information : "하위",
    },
]

  return (
    <ScrollView style={SearchScreenStyles.container}>
      <Text style={SearchStyles.searchTitle}>
        검색
      </Text>
      <SearchBar/>
      {searchStoreList.map((e) =>
        <View key={e.store_id}>
          <Collapse>
              <CollapseHeader>
                  <View style={mapListStyles.listTitle}>
                      <Text style={mapListStyles.number}>
                          {e.store_id}
                      </Text>
                      <Text style={mapStyles.storeNameText}>
                          {e.store_name}
                      </Text>
                      <Text style={mapListStyles.waitingText}>
                          대기 {e.waiting}팀
                      </Text>
                      <Text style={mapListStyles.storeDistanceText}>
                          {e.distance}m
                      </Text>
                  </View>
              </CollapseHeader>
              <CollapseBody>
                  <Text style={mapListStyles.storeDetailText}>
                      {e.information}
                  </Text>
                  <TouchableOpacity
                      style={mapListStyles.reservationButton}
                      onPress={() => navigation.navigate('Reservation')}>
                      <Text style={mapListStyles.reservationText}>
                          예약하기
                      </Text>
                  </TouchableOpacity>
              </CollapseBody>
          </Collapse>
          <View style={mapListStyles.verticalLine}/> 
      </View> 
       )}
    </ScrollView>
  );
};

export default SearchResultScreen;