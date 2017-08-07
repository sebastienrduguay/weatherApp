import React, { Component } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import { onEmailChanged, onPasswordChanged, authenticate } from '../actions/AuthActions';
import { Input, Button } from './common';
import { errorTextStyle } from '../styles';

class Authenticate extends Component {
  onEmailChanged(value) {
    this.props.onEmailChanged(value);
  }

  onPasswordChanged(value) {
    this.props.onPasswordChanged(value);
  }

  signUpRequested() {
    const { email, password } = this.props;
    this.props.authenticate( email, password );
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
              value={this.props.username}
              placeholder='Username@gmail.com'
              onChangeText={this.onEmailChanged.bind(this)}
            />
            <Input
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
              Sign-up
            </Button>
          </View>

        </View>
      </View>
    );
  }
}

export default Authenticate;
