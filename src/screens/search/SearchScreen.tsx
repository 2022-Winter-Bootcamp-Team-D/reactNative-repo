import React from "react";
import {View, Text} from 'react-native';
import SearchScreenStyles from "../../styles/screens/SearchScreenStyles";
import SearchStyles from "../../styles/SearchStyles";

function SearchScreen() {
  return (
    <View style={SearchScreenStyles.container}>
      <Text style={SearchStyles.searchTitle}>
        검색
      </Text>
    </View>
  );
};

export default SearchScreen;