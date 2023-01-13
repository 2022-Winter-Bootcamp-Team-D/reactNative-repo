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


    listTitle: {
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

    waitingText:{
        marginTop: 5,
        marginLeft: 40,
        color: 'black',
        fontFamily: 'BMHANNAAir',
        fontSize: 15,
    },

    storeDetailText:{
        marginTop: 10,
        marginLeft: 20,
        marginBottom: 5,
        padding: 8,
        color: 'black',
        fontFamily: 'BMHANNAAir',
        fontSize: 17,
    },

    storeDistanceText:{
        marginTop: 5,
        marginLeft: 40,
        color: 'black',
        fontFamily: 'BMHANNAAir',
        fontSize: 15,
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
        borderColor: '#ca8f22',
        backgroundColor: '#f6c942',
        borderBottomWidth: 3,
        borderEndWidth: 3, 
    },

    reservationText: {
        textAlign: 'center',
        color: 'black',
        fontFamily: 'BMHANNA',
        fontSize: 17,
    }
    
});

export default mapListStyles;