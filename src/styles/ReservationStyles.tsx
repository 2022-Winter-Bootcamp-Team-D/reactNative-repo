import {StyleSheet} from 'react-native';

const reservationStyles = StyleSheet.create ({
  selectedStore: {
    marginTop: 100,
    marginLeft: 20,
    marginRight: 20,
    alignContent:'center',
    borderWidth: 3,
    borderRadius: 10,
    padding: 10
  },

  storeNameText:{
    marginLeft: -20, 
    color: 'black',
    fontFamily: 'BMJUA',
    fontSize: 23,
  },

  waitingText:{
    marginLeft: 20,
    color: 'black',
    fontFamily: 'BMJUA',
    fontSize: 20,
  },

  storeDistanceText:{
    marginLeft: 10,
    color: 'black',
    fontFamily: 'BMJUA',
    fontSize: 20,
  },
  
  storeDetail: {
    marginTop: 10,
    marginBottom: 10,
    padding: 8,
    color: 'black',
    fontFamily: 'BMHANNAAir',
    fontSize: 17,
  },

  peopleTitle:{ 
    marginTop: 15,
    marginLeft: 30,
    marginRight: 60,
    color: 'black',
    fontFamily: 'BMJUA',
    fontSize: 25
  },

  calculationButton:{
    width: 40,
    height: 40,
    marginLeft: 20,
    marginRight: 20,
    alignSelf: 'center',
    backgroundColor: '#f6c942',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 8,
    justifyContent: 'center'
  },

  calculationText:{
    margin: 5,
    textAlign: 'center',
    color: 'black',
    fontFamily: 'BMJUA',
    fontSize: 30
  },

  peopleInputBox: {
    width: 60,
    height: 60,
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 8
  },

  peopleText:{
    marginTop: '25%',
    textAlign: 'center',
    color: 'black',
    fontFamily: 'BMJUA',
    fontSize: 30
  },

  passwordContainer: {
    flexDirection: 'row'
  },

  PasswordInput:{
    marginLeft: 30,
    marginRight: 40,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },

  reservationButton: {
    marginTop: 80,
    marginLeft: 60,
    marginRight: 60,
    borderEndWidth: 3,
    borderBottomWidth: 3,
    borderRadius: 12,
    borderColor: '#ca8f22',
    padding: 12,
    backgroundColor: '#FFC928'
  },

  reservationButtonText: {
    textAlign: 'center',
    color: 'black',
    fontFamily: 'BMHANNA',
    fontSize: 20
  },

});

export default reservationStyles;