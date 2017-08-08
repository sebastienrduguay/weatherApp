import React, { Component } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, authenticate } from '../actions/AuthActions';
import { Input, Button } from './common';
import { errorTextStyle } from '../styles';

class Authenticate extends Component {
  onEmailChanged(value) {
    this.props.emailChanged(value);
  }

  onPasswordChanged(value) {
    this.props.passwordChanged(value);
  }

  signUpRequested() {
    const { email, password } = this.props;
    this.props.authenticate( { email, password } );
  }

  render() {
    return (
      <View style={{ height: 200, width: '100%', flexDirection: 'column', alignContent: 'flex-start', justifyContent: 'center'}}>
        <View style={{ flex: 1, flexDirection: 'column'}}>

          <ImageBackground
            source={require('../../assets/backgroundWeather.png')}
            imageStyle={{ resizeMode: 'stretch'}}
          />

          <View style={{ height: 100, marginTop: 15 }}>
            <Input
              label='Email'
              value={this.props.email}
              placeholder='Username@gmail.com'
              onChangeText={this.onEmailChanged.bind(this)}
            />
            <Input
              secureTextEntry
              label='Password'
              value={this.props.password}
              placeholder='Password123'
              onChangeText={this.onPasswordChanged.bind(this)}
            />
          </View>

          <Text style={errorTextStyle}>
            {this.props.error}
          </Text>

          <View style={{ height: 35, paddingLeft: 15, paddingRight: 15 }}>
            <Button onPress={this.signUpRequested.bind(this)}>
              Login
            </Button>
          </View>

        </View>
      </View>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  const { email, password, error } = auth;
  return { email, password, error };
};

export default connect(mapStateToProps, {
  emailChanged, passwordChanged, authenticate
})(Authenticate);
