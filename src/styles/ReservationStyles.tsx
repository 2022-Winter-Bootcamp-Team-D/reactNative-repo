import {StyleSheet} from 'react-native';

const reservationStyles = StyleSheet.create ({
  selectedStore: {
    height: '13%',
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    alignContent:'center',
    borderWidth: 3,
    borderRadius: 10
  },

  storeNameText:{
    marginLeft: -10,
    color: 'black',
    fontFamily: 'BMHANNA',
    fontSize: 23,
  },

  waitingText:{
    marginTop: 5,
    marginLeft: 80,
    color: 'black',
    fontFamily: 'BMHANNAAir',
    fontSize: 15,
  },

  storeDistanceText:{
    marginTop: 5,
    marginLeft: 100,
    color: 'black',
    fontFamily: 'BMHANNAAir',
    fontSize: 15,
  },
  
  storeDetail: {
    marginTop: 10,
    marginLeft: 10,
    marginBottom: 5,
    padding: 8,
    color: 'black',
    fontFamily: 'BMHANNAAir',
    fontSize: 17,
  },

  peopleTitle:{ 
    marginTop: 10,
    marginLeft: 20,
    color: 'black',
    fontFamily: 'BMJUA',
    fontSize: 25
  },

  calculationButton:{
    width: 60,
    height: 60,
    marginTop: 10,
    marginLeft: 30,
    marginRight: 30,
    alignSelf: 'center',
    backgroundColor: '#FFF9BF',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 8
  },

  calculationText:{
    marginTop: 10,
    marginLeft: 18,
    color: 'black',
    fontFamily: 'BMJUA',
    fontSize: 40
  },

  peopleInputBox: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 8
  },

  peopleText:{
    marginTop: '30%',
    textAlign: 'center',
    color: 'black',
    fontFamily: 'BMJUA',
    fontSize: 40
  },

  PasswordInput:{
    marginLeft: 20,
    marginRight: 40,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },

});

export default reservationStyles;