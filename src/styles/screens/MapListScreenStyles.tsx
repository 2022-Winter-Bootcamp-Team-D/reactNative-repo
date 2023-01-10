import {StyleSheet} from 'react-native';

const mapListScreenStyles = StyleSheet.create ({
  container: {
    height: 1000,
    backgroundColor: 'white'
  },

  myPosition: {
    marginTop: 20,
    marginLeft: 30,
    color: 'black',
    fontFamily: 'BMHANNA',
    fontSize: 20,
    position: 'relative',
  },

  positionDetail: {
      marginTop: 21,
      color: 'black',
      fontFamily: 'BMHANNAAir',
      fontSize: 20,
  },

  listContainer: {
    marginTop: 10,
  },

  mapListButton:{
    marginTop: -85,
    marginLeft: 290,
    marginRight: 10,
    position: 'absolute',
    left: 0,
    top: 0,
  },

});

export default mapListScreenStyles;