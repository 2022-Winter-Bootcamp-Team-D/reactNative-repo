import {StyleSheet, Platform} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const mapStyles = StyleSheet.create ({
    maptitle: {
        marginTop: 10,
        textAlign: 'center',
        color: 'black',
        fontFamily: 'BMJUA',
        fontSize: 25
    },

    positionContainer: {
        flexDirection: 'row'
    },

    myPosition: {
        marginTop: 20,
        marginLeft: 30,
        color: 'black',
        fontFamily: 'BMHANNA',
        fontSize: 20,
    },

    positionDetail: {
        marginTop: 21,
        marginLeft: 10,
        color: 'black',
        fontFamily: 'BMHANNAAir',
        fontSize: 20,
    },

    mapView: {
        marginTop: 10,
        marginLeft: 10,
        width: '95%',
        height: 500,
        color: 'white',
        borderColor: 'black',
        borderWidth: 3,
        position: 'relative'
    },

    image: {
        width: '100%',
        height: '100%'
    },

    activateIcon:{
        marginTop: 300,
        marginLeft: 100,
        position: 'absolute'
    },

    unactivateIcon:{
        marginTop: 200,
        marginLeft: 300,
        position: 'absolute'
    },

    storeInformation:{
        width: 370,
        marginTop: 500,
        alignContent: 'center',
        padding: 25,
        borderRadius: 5,
        backgroundColor: 'white'
    },

    storeContainer:{
        flexDirection: 'row'
    },

    storeNameText:{
        marginLeft: 10,
        color: 'black',
        fontFamily: 'BMHANNA',
        fontSize: 23,
    },

    storeDetailText:{
        marginTop: 5,
        marginLeft: 10,
        color: 'black',
        fontFamily: 'BMHANNAAir',
        fontSize: 15,
    },

    storeDistanceText:{
        marginTop: 5,
        marginLeft: 120,
        color: 'black',
        fontFamily: 'BMHANNAAir',
        fontSize: 15,
    },

    cancel: {
        width: 370,
        marginTop: 10,
        alignContent: 'center',
        padding: 8,
        borderRadius: 5,
        backgroundColor: 'white'
    },

    cancelText: {
        textAlign: 'center',
        color: 'black',
        fontFamily: 'BMHANNAAir',
        fontSize: 17,
    },

    refuse: {
        width: 370,
        marginTop: 500,
        alignContent: 'center',
        padding: 15,
        borderRadius: 5,
        backgroundColor: 'white'
    },

    refuseText: {
        textAlign: 'center',
        color: 'black',
        fontFamily: 'BMHANNA',
        fontSize: 17,
    },

    markText: {
        marginTop: 5,
        marginLeft: -12,
        color: 'black',
        fontFamily: 'BMHANNA',
        fontSize: 15,
    },

    mapListButton:{
        marginTop: 540,
        marginLeft: 280,
        backgroundColor: '#db7405af',
        padding: 10,
        borderRadius: 5,
        position: 'absolute'
    },
    
    buttonText:{
        textAlign: 'center',
        color: 'black',
        fontFamily: 'BMHANNAAir',
        fontSize: 17,
    },

});

export default mapStyles;