import React, { Component } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, authenticate } from '../actions/AuthActions';
import { Input, Button } from './common';
import { errorTextStyle } from '../styles';
import { formTopLevelContainerStyle, singleButtonBoxStyle } from '../styles/containerStyles';

const BACKGROUND_IMAGE = require('../../assets/backgroundWeather.png');

class Authenticate extends Component {

  onEmailChanged(value) {
    this.props.emailChanged(value);
  }

  onPasswordChanged(value) {
    this.props.passwordChanged(value);
  }

  signUpRequested() {
    const { email, password } = this.props;
    this.props.authenticate({ email, password });
  }

  render() {
    return (
      <View style={formTopLevelContainerStyle}>
        <View style={{ flex: 1, flexDirection: 'column' }}>
          <ImageBackground
            source={BACKGROUND_IMAGE}
            imageStyle={{ resizeMode: 'stretch' }}
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

          <View style={singleButtonBoxStyle}>
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
