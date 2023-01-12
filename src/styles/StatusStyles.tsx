import {StyleSheet} from 'react-native';

const StatusStyles = StyleSheet.create ({
    delayButton: {
        marginTop: 10,
        marginLeft: 60,
        marginRight: 60,
        height: 40,
        borderWidth: 1,
        borderRadius: 12,
        borderColor: 'black',
        backgroundColor: '#D2A3F6'
    },

    delayButtonText: {
        marginTop: '4%',
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
        backgroundColor: '#F48D8D'
    },

    cancelButtonText: {
        marginTop: '4%',
        textAlign: 'center',
        color: 'black',
        fontFamily: 'BMHANNA',
        fontSize: 15
    }
});

export default StatusStyles;