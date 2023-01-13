import {StyleSheet} from 'react-native';

const RegisterStyles = StyleSheet.create ({
  container: {
    height: 1000,
    backgroundColor: '#FFFBD9'
  },

  logoImage: {
    width: 150,
    height: 150,
    alignSelf:'center'
  },

  logoText:{
    marginTop: -20,
    textAlign: 'center',
    color: 'black',
    fontFamily: 'BMJUA',
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
    borderEndWidth: 3,
    borderBottomWidth: 3,
    borderRadius: 12,
    borderColor: '#ca8f22',
    padding: 12,
    backgroundColor: '#FFC928'
  },

  registerButtonText: {
    textAlign: 'center',
    color: 'black',
    fontFamily: 'BMHANNA',
    fontSize: 20
  },

  inquiryButton: {
    marginTop: 10,
    marginLeft: 60,
    marginRight: 60,
    borderEndWidth: 3,
    borderBottomWidth: 3,
    borderRadius: 12,
    borderColor: 'gray',
    padding: 12,
    backgroundColor: '#ECECEC',
  },

  inquiryButtonText: {
    textAlign: 'center',
    color: 'black',
    fontFamily: 'BMHANNA',
    fontSize: 20
  },

});

export default RegisterStyles;