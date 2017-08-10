import React, { Component } from 'react';
import { View, ImageBackground } from 'react-native';
import MapView from 'react-native-maps';
import { connect } from 'react-redux';
import { width, height } from 'react-native-dimension';
import { forecastCreate } from '../actions/WeatherHistoryActions';
import { WeatherItem } from './WeatherItem';
import { TEMPERATURE_OFFSET } from '../constants/constants';
import {
  temperaturesChanged,
  humiditiesChanged,
  pressuresChanged,
  latChanged,
  lonChanged,
  tickValuesChanged,
  dataSelectedChanged,
  dataPointChanged
} from '../actions/WeatherShowActions';
import {
  Button,
  ItemSelector,
  LineChart
} from './common';
import {
  itemSelectorContainerStyle,
  chartContainerStyle,
  buttonBoxStyle,
  mapContainerStyle
} from '../styles/containerStyles';

const DATA_TITLES = ['Temprerature', 'Humidity', 'Pressure'];
const DT_MULTIPLIER = 1000;
const BACKGROUND_IMAGE = require('../../assets/backgroundWeather.png');

class WeatherForecast extends Component {
  componentWillMount() {
    const { data } = this.props;
    const { list } = data;
    const temperatures = [];
    const humidities = [];
    const pressures = [];
    const tickValues = [];
    let hours = 0;
    let counter = 0;

    if (this.props.user !== null && this.props.send) {
      this.props.forecastCreate(data);
    }
    this.props.dataPointChanged(0);
    this.props.dataSelectedChanged(0);
    this.props.latChanged(data.city.coord.lat);
    this.props.lonChanged(data.city.coord.lon);
    list.forEach((element) => {
        const date = new Date(element.dt * DT_MULTIPLIER);
        temperatures.push({ x: date, y: (element.main.temp - TEMPERATURE_OFFSET) });
        humidities.push({ x: date, y: element.main.humidity });
        pressures.push({ x: date, y: element.main.pressure });
        console.log(counter);
        if (counter % 4 === 0) {
          tickValues.push(date);
        }
        hours += 3;
        ++counter;
    });
    this.props.temperaturesChanged(temperatures);
    this.props.humiditiesChanged(humidities);
    this.props.pressuresChanged(pressures);
    this.props.tickValuesChanged(tickValues);
  }

  onTemperatureButtonPressed = () => {
    this.props.dataSelectedChanged(0);
  }

  onHumidityButtonPressed = () => {
    this.props.dataSelectedChanged(1);
  }

  onPressureButtonPressed = () => {
    this.props.dataSelectedChanged(2);
  }

  onNextDataPoint = () => {
    this.props.dataPointChanged(this.props.dataPointSelected + 1);
  }

  onPreviousDataPoint = () => {
    this.props.dataPointChanged(this.props.dataPointSelected - 1);
  }

  getSelectedData(index) {
    switch (index) {
      case 0:
      return this.props.temperatures;
      case 1:
      return this.props.humidities;
      case 2:
      return this.props.pressures;
      default:
      return this.props.temperatures;
    }
  }

  render() {
    const { data } = this.props;
    const { dataSelected, tickValues, dataPointSelected } = this.props;
    return (
      <View style={{ flex: 1 }}>

      <ImageBackground
        source={BACKGROUND_IMAGE}
        imageStyle={{ resizeMode: 'stretch' }}
      />
        <View style={chartContainerStyle}>
          <LineChart
            data={this.getSelectedData(dataSelected)}
            xKey={'x'}
            yKey={'y'}
            width={width(100)}
            height={height(30)}
            title={DATA_TITLES[dataSelected]}
            padding={15}
            tickValues={tickValues}
          />
        </View>

        <View style={itemSelectorContainerStyle}>
          <ItemSelector
            onPreviousDataPoint={this.onPreviousDataPoint.bind(this)}
            onNextDataPoint={this.onNextDataPoint.bind(this)}
            showPrevious={dataPointSelected !== 0}
            showNext={dataPointSelected !== data.list.length - 1}
            height={height(30)}
          >
            <WeatherItem data={data.list[dataPointSelected]} />
          </ItemSelector>
        </View>

        <View style={mapContainerStyle}>
          <MapView
            width={width(96)}
            height={height(25)}
            provider={null}
            mapType={'hybrid'}
            initialRegion={{
              latitude: this.props.lat,
              longitude: this.props.lon,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            style={{ borderWidth: 1, borderColor: 'white' }}
          />
        </View>

        <View style={{ height: height(10), ...buttonBoxStyle }} >
          <Button onPress={this.onTemperatureButtonPressed.bind(this)} >
            {DATA_TITLES[0]}
          </Button>
          <Button onPress={this.onHumidityButtonPressed.bind(this)} >
            {DATA_TITLES[1]}
          </Button>
          <Button onPress={this.onPressureButtonPressed.bind(this)} >
            {DATA_TITLES[2]}
          </Button>
        </View>

      </View>
    );
  }
}

const mapStateToProps = ({ weatherForecast, auth }) => {
    const {
      temperatures,
      humidities,
      pressures,
      lat, lon,
      tickValues,
      dataSelected,
      dataPointSelected
    } = weatherForecast;
    const { user } = auth;

    return {
      user,
      temperatures,
      humidities,
      pressures,
      lat,
      lon,
      tickValues,
      dataSelected,
      dataPointSelected
    };
};

export default connect(
  mapStateToProps, {
  temperaturesChanged,
  humiditiesChanged,
  pressuresChanged,
  latChanged,
  lonChanged,
  tickValuesChanged,
  dataSelectedChanged,
  dataPointChanged,
  forecastCreate }
)(WeatherForecast);
