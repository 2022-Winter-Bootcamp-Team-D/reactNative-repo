import React from "react";
import {ScrollView, View, Text, TextInput} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import CollapesibleView from "../../components/maplist/CollapsibleView";
import SearchBar from "../../components/search/SearchBar";
import mapListStyles from "../../styles/MapListStyles";
import SearchScreenStyles from "../../styles/screens/SearchScreenStyles";
import SearchStyles from "../../styles/SearchStyles";

function SearchResultScreen() {
  const onPress = () => {
    // .. 실행할 함수
  }
  return (
    <ScrollView style={SearchScreenStyles.container}>
      <Text style={SearchStyles.searchTitle}>
        검색
      </Text>
      <SearchBar/>
      <CollapesibleView/>
      <View style={mapListStyles.verticalLine}/>
      <CollapesibleView/>
      <View style={mapListStyles.verticalLine}/>
      <CollapesibleView/>
      <View style={mapListStyles.verticalLine}/>
      <CollapesibleView/>
      <View style={mapListStyles.verticalLine}/>
      <CollapesibleView/>
      <View style={mapListStyles.verticalLine}/>
      <CollapesibleView/>
      <View style={mapListStyles.verticalLine}/>
      <CollapesibleView/>
      <View style={mapListStyles.verticalLine}/>
      <CollapesibleView/>
      <View style={mapListStyles.verticalLine}/>
      <CollapesibleView/>
      <View style={mapListStyles.verticalLine}/>
      <CollapesibleView/>
      <View style={mapListStyles.verticalLine}/>
      <CollapesibleView/>
      <View style={mapListStyles.verticalLine}/>
      <CollapesibleView/>
      <View style={mapListStyles.verticalLine}/>
      <CollapesibleView/>
      <View style={mapListStyles.verticalLine}/>
    </ScrollView>
  );
};

export default SearchResultScreen;