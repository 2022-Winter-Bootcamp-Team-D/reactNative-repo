import {StyleSheet, Platform} from 'react-native';

const mapStyles = StyleSheet.create ({
    maptitle: {
        marginTop: 10,
        textAlign: 'center',
        color: 'black',
        fontFamily: 'BMJUA',
        fontSize: 25,
        
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
        marginTop: 20,
        marginLeft: 10,
        color: 'black',
        fontFamily: 'BMHANNAAir',
        fontSize: 20,
    },

    mapView: {
        marginTop: 10,
        width: 100,
        height: 300,
        borderColor: 'black'
    },

    storeInformation: {
        marginTop: 10,
        width: 100,
        height: 300,
        borderColor: 'black'
    },

});

export default mapStyles;