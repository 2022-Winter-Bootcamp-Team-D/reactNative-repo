import {StyleSheet} from 'react-native';

const statusStyles = StyleSheet.create ({

    statusTitle: {
        width: '100%',
        height: '11%',
        backgroundColor: '#FCD265',
    },

    delayButton: {
        marginTop: 10,
        width: 100,
        height: 50,
        marginLeft: 12,
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
        fontSize: 18
    },

    cancelButton: {
        marginTop: 10,
        width: 100,
        height: 50,
        marginLeft: 185,
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
        fontSize: 18
    },

    ButtonContainer: {
        flexDirection: 'row'
    }
});

export default statusStyles;