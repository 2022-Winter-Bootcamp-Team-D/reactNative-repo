import {StyleSheet} from 'react-native';

const InquiryStyles = StyleSheet.create ({
  logoImage: {
      width: 150,
      height: 150,
      alignSelf:'center'
    },
  
    logoText:{
      marginTop: -20,
      textAlign: 'center',
      color: 'black',
      fontFamily: 'BMHANNA',
      fontSize: 35
    },
  
    RegisterInput:{
      marginTop: 10,
      marginLeft: 60,
      marginRight: 60,
      borderBottomWidth: 1,
      borderBottomColor: 'black',
    },

    inquiryButton: {
      marginTop: 50,
      marginLeft: 60,
      marginRight: 60,
      borderEndWidth: 3,
      borderBottomWidth: 3,
      borderRadius: 12,
      borderColor: '#ca8f22',
      backgroundColor: '#FFC928',
      padding: 12,
      justifyContent: 'center'
    },
  
    inquiryButtonText: {
      //marginTop: '4%',
      textAlign: 'center',
      color: 'black',
      fontFamily: 'BMHANNA',
      fontSize: 20
    },
});

export default InquiryStyles;