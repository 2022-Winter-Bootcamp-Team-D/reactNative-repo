import {StyleSheet} from 'react-native';

const StatusListStyles = StyleSheet.create ({

    HomeButton: {
        marginLeft: 20,
    },

    StatusTitleText: {
        marginLeft: 110,
        color: 'black',
        fontFamily: 'BMJUA',
        fontSize: 25,
    },

    listTitle: {
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        padding: 15,
        backgroundColor: '#FFF9BF',
        borderWidth: 1,
        alignContent:'center',
        justifyContent: 'center',
    },

    listTitleText: {
        color: 'black',
        fontFamily: 'BMHANNA',
        fontSize: 17,
    },

    listContent: {
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#FFF9BF',
        borderWidth: 1,
        alignContent:'center',
        //justifyContent: 'center',
    },

    listContentText: {
        color: 'black',
        fontFamily: 'BMHANNAAir',
        marginTop: 20,
        marginLeft: 10,
        fontSize: 25,
        textAlign: 'center'
    },

    listContentTextNumber: {
        color: 'black',
        fontFamily: 'BMHANNA',
        marginLeft: 10,
        fontSize: 35,
        textAlign: 'center'
    },

    listContentMessage: {
        marginTop: 20,
        marginBottom: 20,
        fontSize: 20,
        textAlign: 'center',
        fontFamily: 'BMHANNA',
        
    },

    ReceiptContent: {
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#FFF9BF',
        borderWidth: 1,
        padding: 10
    },

    ReceiptContentTitle: {
        marginTop: 10,
        marginLeft: 10,
        color: 'black',
        fontFamily: 'BMHANNAAir',
        fontSize: 17,
    },

    ReceiptContentText: {
        marginTop: 10,
        marginLeft: 50,
        color: 'black',
        fontFamily: 'BMHANNA',
        fontSize: 17,
    },

    ReceiptContainer: {
        flexDirection: 'row'
    }
});

export default StatusListStyles;