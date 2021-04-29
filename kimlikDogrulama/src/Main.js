import React, { Component } from 'react';
import {Text, View} from 'react-native';
import firebase from 'firebase';
import Header from './ortak/Header';
import LoginForm from './LoginForm';
import CardSection from './ortak/CardSection';
import Spinner from './ortak/Spinner';
import Button from './ortak/Button';


class Main extends Component {
  state = { loggedIn: null};
  UNSAFE_componentWillMount() {
    firebase.initializeApp({
    apiKey: 'AIzaSyBb2h3l_wANrQuA8BypHWNG_y_xPClEVCI',
    authDomain: 'kimlikdogrulama-9f605.firebaseapp.com',
    databaseURL: 'https://kimlikdogrulama-9f605.firebaseio.com',
    projectId: 'kimlikdogrulama-9f605',
    storageBucket: 'kimlikdogrulama-9f605.appspot.com',
    messagingSenderId: '191353965636',
    appId: '1:191353965636:web:096c35550bbc9b76a04011',
    measurementId: 'G-EDH1CZYS63'
  });

  firebase.auth().onAuthStateChanged((user) => {
    if(user) {
      this.setState({ loggedIn: true });
    }
    else {
      this.setState({ loggedIn: false });
    }
  });
  }

clickLogout() {
 firebase.auth().signOut();
}

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return(
          <CardSection>
            <Button onPress={this.clickLogout.bind(this)}> Çıkış </Button>
          </CardSection>
        );
        case false:
          return (
            <LoginForm />
        );
      default:
      return (
      <View>
        <Spinner size="large" />
      </View>
      );
    }
  }

  render (){
    return(
      <View>
        <Header headerText="Giriş Ekranı" />
        {this.renderContent()}
      </View>
    );
  }
}

export default Main;
