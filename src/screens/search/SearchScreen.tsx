import React, { useState } from "react";
import {View, Text, TextInput} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../screens/RootStackParams';
import AsyncStorage from '@react-native-community/async-storage';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import SearchScreenStyles from "../../styles/screens/SearchScreenStyles";
import SearchStyles from "../../styles/SearchStyles";
import API from "../../services/API";

type ResgisterScreenProp = StackNavigationProp<RootStackParamList, 'Search'>;

function SearchScreen() {
  const [search, setSearch] = useState('');
  const navigation = useNavigation<ResgisterScreenProp>();

  const onPress = () => {{
    navigation.navigate('SearchResult')
  }}

  async function getToken() {
    // 가져오기
    AsyncStorage.getItem('accessToken', (accessToken) => {
        console.log("토큰: " + accessToken);
        return(accessToken);
    });
    AsyncStorage.getItem('refreshToken', (refreshToken) => {
      console.log("토큰: " + refreshToken);
      return(refreshToken);
  });
  }

  async function loginAPI() {
    try {
        const response = await API.post(
            '/map/?search={word}&lat={latitude}&long={longitude}/',
            {
            token: getToken(),
            search: search,
            latitude: 123,
            longitude: 123
            },
        )
        .then(function (response) {
            onPress()
        })
        .catch(function (error) {
            console.log(error);
        });
    } catch (error) {
        console.log(error);
    }
};

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
          value={search}
          onChangeText={(search) => {setSearch(search)}}
        />
      </View>
    </View>
  );
};

export default SearchScreen;