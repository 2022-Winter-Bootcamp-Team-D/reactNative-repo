import {StyleSheet} from 'react-native';

const mapListStyles = StyleSheet.create ({
    arrayList: {
        marginTop: 20,
        marginBottom: 10,
        marginLeft: 315,
        color: 'black',
        fontFamily: 'BMHANNAAir',
        fontSize: 15,
        position: 'relative',
    },

    waitingText:{
        marginTop: 5,
        marginLeft: 40,
        color: 'black',
        fontFamily: 'BMHANNAAir',
        fontSize: 15,
    },

    storeDetailText:{
        marginTop: 15,
        marginLeft: 40,
        marginBottom: 5,
        color: 'black',
        fontFamily: 'BMHANNAAir',
        fontSize: 15,
    },

    storeDistanceText:{
        marginTop: 5,
        marginLeft: 40,
        color: 'black',
        fontFamily: 'BMHANNAAir',
        fontSize: 15,
    },

    makeList: {
        marginTop: 30,
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
    },

    hideDetail: {
        marginLeft: 40,
    },

    reservationButton: {
        width: '80%',
        marginLeft: '10%',
        padding: 8,
        borderRadius: 8,
        backgroundColor: '#FFD495',
        
    },

    reservationText: {
        textAlign: 'center',
        color: 'black',
        fontFamily: 'BMHANNA',
        fontSize: 17,
    }
    
});

export default mapListStyles;