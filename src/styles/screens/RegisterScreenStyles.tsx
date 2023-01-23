import {StyleSheet} from 'react-native';

const RegisterScreenStyles = StyleSheet.create ({
  mainContainer: {  //전체 태그를 설정해줘야 하기 때문에 이름을 그냥 container로 설정한 것임
    height: 1000,
    backgroundColor: '#FFFBD9'
  },
  
  registerContainer: {
    marginTop: '30%'
  },

  signupContainer: {
    marginTop: '10%'
  },

  logo: {
  },
  
  registerButton:{
    marginTop: 20,
  }

});

export default RegisterScreenStyles;