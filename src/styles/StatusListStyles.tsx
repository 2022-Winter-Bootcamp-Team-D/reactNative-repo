import {StyleSheet} from 'react-native';

const StatusListStyles = StyleSheet.create ({

    titleContainer: {
        marginTop: 40,
        flexDirection: 'row'
    },

    HomeButton: {
        marginTop: 15,
        marginLeft: '33%',
    },

    StatusTitleText: {
        marginLeft: 110,
        color: 'black',
        fontFamily: 'BMJUA',
        fontSize: 25,
    },

    listTitle: {
        marginTop: 20,
        marginLeft: 20,
        marginBottom: 20,
        color: 'black',
        fontFamily: 'BMHANNA',
        fontSize: 35,
    },

    listContainer: {
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#FCD265',
        borderColor: 'black',
        borderEndWidth: 3,
        borderBottomWidth: 3,
        alignContent:'center',
        borderRadius: 8,
        flexDirection: 'row',
        padding: 15
    },

    listContentText: {
        marginTop: 10,
        marginLeft: 20,
        color: 'black',
        fontFamily: 'BMHANNA',
        fontSize: 20,
    },

    listContentTextNumber: {
        marginLeft: 160,
        color: 'black',
        fontFamily: 'BMJUA',
        fontSize: 35,
        textAlign: 'center'
    },

    listContentMessage: {
        marginTop: 20,
        marginLeft: 20,
        marginBottom: 20,
        fontSize: 20,
        color: 'black',
        fontFamily: 'BMHANNA',
        
    },

    ReceiptContainer: {
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 40,
        backgroundColor: 'white',
        borderWidth: 2,
        padding: 40,
        borderRadius: 8,
        flexDirection: 'row'
    },

    ReceiptContentTitle: {
        marginTop: 10,
        marginLeft: -15,
        color: 'black',
        fontFamily: 'BMHANNA',
        fontSize: 20,
    },

    ReceiptContentText: {
        marginTop: 10,
        marginLeft: 60,
        color: 'black',
        fontFamily: 'BMJUA',
        textAlign: 'right',
        fontSize: 20,
        ellipsizeMode: 'header'
    },

});

export default StatusListStyles;