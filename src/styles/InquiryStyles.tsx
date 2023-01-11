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
  
    registerButton: {
      marginTop: 10,
      marginLeft: 60,
      marginRight: 60,
      height: 40,
      borderWidth: 1,
      borderRadius: 12,
      borderColor: 'black',
      backgroundColor: '#FFE600'
    },
  
    registerButtonText: {
      marginTop: '4%',
      textAlign: 'center',
      color: 'black',
      fontFamily: 'BMHANNA',
      fontSize: 15
    },
  
    inquiryButton: {
      marginTop: 40,
      marginLeft: 60,
      marginRight: 60,
      height: 40,
      borderWidth: 1,
      borderRadius: 12,
      borderColor: 'black',
      backgroundColor: '#FFE600',
      justifyContent: 'center'
    },
  
    inquiryButtonText: {
      //marginTop: '4%',
      textAlign: 'center',
      color: 'black',
      fontFamily: 'BMHANNA',
      fontSize: 15
    },
});

export default InquiryStyles;