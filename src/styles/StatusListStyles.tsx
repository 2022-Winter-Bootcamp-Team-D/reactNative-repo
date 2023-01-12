import {StyleSheet} from 'react-native';

const StatusListStyles = StyleSheet.create ({

    listTitle: {
        height: '10%',
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#FFF9BF',
        borderWidth: 1,
        alignContent:'center',
        justifyContent: 'center',
    },

    listTitleText: {
        color: 'black',
        fontFamily: 'BMHANNA',
        marginLeft: 10,
        fontSize: 17,
        
    },

    listContent: {
        height: '57%',
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

    listContentText1: {
        fontSize: 20,
        textAlign: 'center',
        fontFamily: 'BMHANNA',
        marginTop: 20,
        marginBottom: 30
    },


});

export default StatusListStyles;