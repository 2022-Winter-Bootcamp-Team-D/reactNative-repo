import {StyleSheet} from 'react-native';

const statusStyles = StyleSheet.create ({

    statusTitle: {
        width: '100%',
        height: '9%',
        backgroundColor: '#FCD265'
    },

    delayButton: {
        marginTop: 10,
        marginLeft: 60,
        marginRight: 60,
        height: 40,
        borderWidth: 1,
        borderRadius: 12,
        borderColor: 'black',
        backgroundColor: '#D2A3F6',
        justifyContent: 'center'
    },

    delayButtonText: {
        textAlign: 'center',
        color: 'black',
        fontFamily: 'BMHANNA',
        fontSize: 15
    },

    cancelButton: {
        marginTop: 10,
        marginLeft: 60,
        marginRight: 60,
        height: 40,
        borderWidth: 1,
        borderRadius: 12,
        borderColor: 'black',
        backgroundColor: '#F48D8D',
        justifyContent: 'center'
    },

    cancelButtonText: {
        textAlign: 'center',
        color: 'black',
        fontFamily: 'BMHANNA',
        fontSize: 15
    }
});

export default statusStyles;