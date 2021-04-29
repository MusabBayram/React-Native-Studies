import AsyncStorage from '@react-native-community/async-storage';
import { AppRegistry } from 'react-native';
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import firebase from '@firebase/app';
import '@firebase/auth';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import Router from './src/Router';

class Main extends Component {
  UNSAFE_componentWillMount() {
    firebase.initializeApp({
    apiKey: 'AIzaSyC7oXL0bFH-ljGwlHmrTaRJ9cUNM719uGI',
    authDomain: 'ogrencikayit-53380.firebaseapp.com',
    databaseURL: 'https://ogrencikayit-53380.firebaseio.com',
    projectId: 'ogrencikayit-53380',
    storageBucket: 'ogrencikayit-53380.appspot.com',
    messagingSenderId: '356810194993',
    appId: '1:356810194993:web:cfe6b4304a38e35415d510'
    });
  }
 render() {
   const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
   return(
     <Provider store={store}>
         <Router />
     </Provider>
   );
   }
}
AppRegistry.registerComponent('studentProje',  () => point);
export default Main;
