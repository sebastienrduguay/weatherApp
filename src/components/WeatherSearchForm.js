import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, ImageBackground } from 'react-native';
import { width, height } from 'react-native-dimension';
import { cityNameChanged, countryNameChanged, fetchForcast } from '../actions/WeatherSearchActions';
import { Input, Button, Spinner } from './common';
import { errorTextStyle } from '../styles';
import { formTopLevelContainerStyle } from '../styles/containerStyles';

const BACKGROUND_IMAGE = require('../../assets/backgroundWeather.png');

class WeatherSearchForm extends Component {

  onCityNameChange(value) {
    this.props.cityNameChanged(value);
  }

  onCountryNameChange(value) {
    this.props.countryNameChanged(value);
  }

  searchRequested() {
    const { city, country } = this.props;
    this.props.fetchForcast({ city, country });
  }

  renderButton() {
      if (this.props.loading) {
        return <Spinner size='large' />;
      }
      return (
        <Button onPress={this.searchRequested.bind(this)}>
          Search
        </Button>
      );
  }

  render() {
    return (
      <View style={formTopLevelContainerStyle}>
        <View style={{ flex: 1, flexDirection: 'column' }}>
          <ImageBackground
            source={BACKGROUND_IMAGE}
            imageStyle={{ width: width(100), height: height(100) }}
          />
          <View style={{ height: 100, marginTop: 15 }}>
            <Input
              label='City'
              value={this.props.city}
              placeholder='Montreal'
              onChangeText={this.onCityNameChange.bind(this)}
            />

            <Input
              label='Country'
              value={this.props.country}
              placeholder='Canada'
              onChangeText={this.onCountryNameChange.bind(this)}
            />
          </View>

          <Text style={errorTextStyle}>
            {this.props.error}
          </Text>

          <View style={{ height: 35, paddingLeft: 15, paddingRight: 15 }}>
            <Button onPress={this.searchRequested.bind(this)}>
              Search
            </Button>
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = ({ weatherSearchForm }) => {
  const { city, country, loading, error } = weatherSearchForm;
  return { city, country, loading, error };
};

export default connect(
  mapStateToProps,
  { cityNameChanged, countryNameChanged, fetchForcast }
)(WeatherSearchForm);
