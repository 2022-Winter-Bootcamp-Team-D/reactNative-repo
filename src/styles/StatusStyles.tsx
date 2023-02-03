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
        borderEndWidth: 3,
        borderBottomWidth: 3,
        borderRadius: 12,
        borderColor: 'gray',
        backgroundColor: '#a9a7a2',
        padding: 17,
        justifyContent: 'center'
    },

    delayButtonText: {
        textAlign: 'center',
        color: 'black',
        fontFamily: 'BMHANNA',
        fontSize: 20
    },

    cancelButton: {
        marginLeft: 130,
        borderEndWidth: 3,
        borderBottomWidth: 3,
        borderRadius: 12,
        borderColor: '#ca8f22',
        backgroundColor: '#FFC928',
        padding: 17,
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