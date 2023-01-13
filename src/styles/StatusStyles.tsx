import {StyleSheet} from 'react-native';

const statusStyles = StyleSheet.create ({

    statusTitle: {
        width: '100%',
        height: '6%',
        flexDirection: 'row',
        alignItems: 'center'
    },

    delayButton: {
        marginTop: 10,
        marginLeft: 12,
        borderWidth: 1,
        borderRadius: 12,
        borderColor: 'black',
        backgroundColor: '#a9a7a2',
        padding: 20,
        justifyContent: 'center'
    },

    delayButtonText: {
        textAlign: 'center',
        color: 'black',
        fontFamily: 'BMHANNA',
        fontSize: 20
    },

    cancelButton: {
        marginTop: 10,
        marginLeft: 120,
        borderWidth: 1,
        borderRadius: 12,
        borderColor: 'black',
        backgroundColor: '#FCD265',
        padding: 20,
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