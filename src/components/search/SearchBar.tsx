import React from "react";
import {View, Text, TextInput} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import SearchStyles from "../../styles/SearchStyles";

function SearchBar() {
    const onPress = () => {
        // .. 실행할 함수
    }
    return (
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
    );
};

export default SearchBar;