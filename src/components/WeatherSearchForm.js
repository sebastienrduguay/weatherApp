import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, ImageBackground } from 'react-native';
import { cityNameChanged, countryNameChanged, fetchForcast } from '../actions/WeatherSearchActions';
import { Card, CardSection, Input, Button, Spinner } from './common';
import { errorTextStyle } from '../styles';

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
      <View style={{ height: 200, width: '100%', flexDirection: 'column', alignContent: 'flex-start', justifyContent: 'center'}}>
        <View style={{ flex: 1, flexDirection: 'column'}}>
          <ImageBackground
            source={require('../../assets/backgroundWeather.png')}
            imageStyle={{ resizeMode: 'stretch'}}
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
