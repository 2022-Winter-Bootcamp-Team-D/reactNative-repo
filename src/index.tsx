import { AppRegistry } from 'react-native';
import messaging from '@react-native-firebase/messaging';
import App from '../App';

// Register background handler
messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('Message handled in the background!', remoteMessage);
});

AppRegistry.registerComponent('app', () => App);