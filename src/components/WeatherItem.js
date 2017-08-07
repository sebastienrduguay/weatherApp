import React from 'react';
import { View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const WeatherItem = ({data}) => {
  const { dataPointTextStyle } = styles;
  const description = data.weather[0].description;
  const icon = data.weather[0].icon;
  const DIRECTIONS = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
  const direction = Math.round((data.wind.deg / 45) + 0.5);

  return (
    <View style={{ flexDirection: 'row' }}>

      <View style={{ marginRight: 15, flex: 1.5 }}>
        <View style={{ flexDirection: 'row', marginBottom: 2 }} >
          <Icon name={'calendar-clock'} size={13} color={'white'} style={{ alignSelf: 'center'}} />
          <Text style={dataPointTextStyle}>
            {` ${data.dt_txt}`}
          </Text>
        </View>
        <View style={{ backgroundColor: '#068785', flex: 1, borderWidth: 1, borderRadius: 5, borderColor: 'white', padding: 5}}>
          <View style={{ flexDirection: 'column' }} >
            <Image
              source={{uri: `http://openweathermap.org/img/w/${icon}.png`}}
               style={{width: 45, height: 23 }}
            />
            <Text style={dataPointTextStyle}>
              {` ${description.charAt(0).toUpperCase() + description.slice(1)}`}
            </Text>
          </View>
        </View>
      </View>

      <View style={{ flex: 1 }}>

        <View style={{ flexDirection: 'row' }} >
          <Icon name={'thermometer-lines'} size={13} color={'white'} style={{ alignSelf: 'center'}}/>
          <Text style={dataPointTextStyle}>
            {` ${(data.main.temp-273.15).toFixed(2)} C˚`}
          </Text>
        </View>

        <View style={{ flexDirection: 'row' }} >
          <Icon name={'water'} size={13} color={'white'} style={{ alignSelf: 'center'}} />
          <Text style={dataPointTextStyle}>
            {` ${data.main.humidity} %`}
          </Text>
        </View>

        <View style={{ flexDirection: 'row' }} >
          <Icon name={'weight'} size={13} color={'white'} style={{ alignSelf: 'center'}} />
          <Text style={dataPointTextStyle}>
            {` ${data.main.pressure} hPa`}
          </Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Icon name={'weather-windy'} size={13} color={'white'} style={{ alignSelf: 'center'}}/>
          <Text style={dataPointTextStyle}>
            {` ${data.wind.speed} mph ${DIRECTIONS[direction%8]}`}
          </Text>
        </View>
      </View>

    </View>
  );
};

const styles = {
  dataPointTextStyle: {
    color: 'white'
  }
}
export { WeatherItem };
