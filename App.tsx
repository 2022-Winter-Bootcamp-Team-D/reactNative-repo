/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect, type PropsWithChildren} from 'react';
import {RootStackParamList} from './src/screens/RootStackParams';
import LoginScreen from './src/screens/login/LoginScreen';
import SignupScreen from './src/screens/signup/SignupScreen';
import MainScreen from './src/screens/main';
import MapScreen from './src/screens/map/MapScreen'
import MapListScreen from './src/screens/maplist/MapListScreen';
import InquiryScreen from './src/screens/inquiry/InquiryScreen';
import ReservationScreen from './src/screens/reservation/ReservationScreen';
import StatusScreen from './src/screens/status/StatusScreen';
import SearchScreen from './src/screens/status/StatusScreen';
import SearchResultScreen from './src/screens/search/SearchResultScreen';
import ReservationResultScreen from './src/screens/reservationResult/ReservationResultScreen';

  const Stack = createStackNavigator<RootStackParamList>();

import {
  SafeAreaView, //컨테이너
  ScrollView,   //스크롤
  StatusBar,    //
  StyleSheet,   //스타일지정
  Text,
  useColorScheme, //
  View,         //<div>와 같은 개념, 특정한 상황 제외하고 항상 쓰임
  Alert         //알림창 경고창
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import messaging from '@react-native-firebase/messaging';


const Section: React.FC<
  PropsWithChildren<{
    title: string;
  }>
> = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

// https://superwony.tistory.com/95

//지우면 안돼!!!
messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('[Background Remote Message]', remoteMessage);
});

function App() {
  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });
  return unsubscribe;
  }, []);

  // const getFcmToken = async () => {
  //   const fcmToken = await messaging().getToken();
  //   console.log('[FCM Token] ', fcmToken);
  // };

  // useEffect(() => {
  //   getFcmToken();
  //   const unsubscribe = messaging().onMessage(async remoteMessage => {
  //     console.log('[Remote Message] ', JSON.stringify(remoteMessage));
  //   });
  //   return unsubscribe;
  // }, []);

  //내가 이동하고자 하는 화면 이름과 컴포넌트 작성
  return (
    <NavigationContainer>
      <Stack.Navigator> 
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false,}}/> 
        <Stack.Screen name="Signup" component={SignupScreen} options={{headerShown: false,}}/> 
        <Stack.Screen name="Inquiry" component={InquiryScreen} options={{headerShown: false,}}/>
        <Stack.Screen name="Map" component={MapScreen} options={{headerShown: false,}}/>
        <Stack.Screen name="MapList" component={MapListScreen} options={{headerShown: false,}}/>
        <Stack.Screen name="Status" component={StatusScreen} options={{headerShown: false,}}/>
        <Stack.Screen name="Search" component={SearchScreen} options={{headerShown: false,}}/>
        <Stack.Screen name="SearchResult" component={SearchResultScreen} options={{headerShown: false,}}/>
        <Stack.Screen name="Reservation" component={ReservationScreen} options={{headerShown: false,}}/>
        <Stack.Screen name="ReservationResult" component={ReservationResultScreen} options={{headerShown: false,}}/>
        <Stack.Screen name="Main" component={MainScreen} options={{headerShown: false,}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
