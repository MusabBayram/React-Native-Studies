import React, { Component } from 'react';
import { View, TextInput, Alert } from 'react-native';
import firebase from '@firebase/app';
import '@firebase/auth'
import Button from './ortak/Button';
import Card from './ortak/Card';
import CardSection from './ortak/CardSection';
import Spinner from './ortak/Spinner';


class LoginForm extends Component {
  state ={ email: '', password: '', loading: false};
  clickLogin() {
    this.setState({ loading: true});
    const { email, password } = this.state;

    if (email === '' || password === ''){
      this.setState({ loading: false});
      Alert.alert(
        'Merhaba',
        'Kullanıcı adı veya şifre boş olamaz!',
        [
          {text: 'Tamam', onPress: () => null}
        ]
      );
    }
    else{
      firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.loginSucces.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(this.loginSucces.bind(this))
        .catch(this.loginFail.bind(this));
      });
    }
  }
  loginSucces() {
    console.log('Başarılı...');
    this.setState({ loading: false});
  }
  loginFail() {
    console.log('Bir hata oluştu!');
    this.setState({ loading: false});
    Alert.alert(
      'Merhaba',
      'Kullanıcı adı veya şifre hatalı!',
      [
        {text: 'Tamam', onPress: () => null}
      ]
    );
  }
  renderButton() {
    if(!this.state.loading) {
      return <Button onPress={this.clickLogin.bind(this)}> Giriş </Button>;
    }
    return <Spinner size="small" />;
  }
  render(){
    const { inputStyle } = styles;
    return(
      <Card>

        <CardSection>
        <TextInput
          placeholder="E-mail"
          style={inputStyle}
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
         />
        </CardSection>

        <CardSection>
        <TextInput
          secureTextEntry
          placeholder="Password"
          style={inputStyle}
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
         />
        </CardSection>

        <CardSection>
          {this.renderButton()}
        </CardSection>

      </Card>
    );
  }
}
const styles = {
  inputStyle: {
  color: '#000',
  paddingRight: 5,
  paddingLeft: 5,
  fontSize: 18,
  lineHeight: 23,
  flex: 2
},

};

export default LoginForm;
