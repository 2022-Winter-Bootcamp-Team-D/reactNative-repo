import {StyleSheet} from 'react-native';

const mapListStyles = StyleSheet.create ({
    arrayList: {
        marginTop: 20,
        marginBottom: 10,
        marginLeft: 320,
        color: 'black',
        fontFamily: 'BMHANNAAir',
        fontSize: 15,
        position: 'relative',
    },

    makeList: {
        marginTop: 20,
        marginLeft: 30,
        flexDirection: 'row',
    },

    number: {
        marginRight: 20,
        color: 'black',
        fontFamily: 'BMHANNA',
        fontSize: 23,
    },

    verticalLine: {
        marginTop: 10,
        marginLeft: 20,
        width: '90%',
        height: 3,
        backgroundColor: 'gray'
    }

});

export default mapListStyles;