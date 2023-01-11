import React from "react";
import {View, Text, TextInput} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../screens/RootStackParams';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import SearchScreenStyles from "../../styles/screens/SearchScreenStyles";
import SearchStyles from "../../styles/SearchStyles";

type ResgisterScreenProp = StackNavigationProp<RootStackParamList, 'Search'>;

function SearchScreen() {

  const navigation = useNavigation<ResgisterScreenProp>();
  const onPress = () => {
    navigation.navigate('SearchResult')
  }

  return (
    <View style={SearchScreenStyles.container}>
      <Text style={SearchStyles.searchTitle}>
        검색
      </Text>
      <View style={SearchStyles.searchBar}>
        <FontAwesomeIcon
          style={SearchStyles.searchIcon}
          name='search' 
          size={20} 
          color='gray'
        />
        <TextInput
          style={SearchStyles.searchSection}
          placeholder='매장을 검색해 보세요'
          onSubmitEditing={onPress}
          returnKeyType="search"
        />
      </View>
    </View>
  );
};

export default SearchScreen;