import React from 'react';
import { View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { itemIconStyle } from '../styles/iconStyles';
import { dataPointTextStyle } from '../styles/textStyles';
import { itemDescriptionContainerStyle } from '../styles/containerStyles';
import { TEMPERATURE_OFFSET } from '../constants/constants';

const WeatherItem = ({ data }) => {
  const description = data.weather[0].description;
  const icon = data.weather[0].icon;
  const DIRECTIONS = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
  const direction = Math.round((data.wind.deg / 45) + 0.5);
  const ICON_SIZE = 13;
  const ICON_COLOR = 'white';

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

      <View style={{ marginRight: 15, flex: 1.5 }}>
        <View style={{ flexDirection: 'row', marginBottom: 2, justifyContent: 'flex-start' }} >
          <Icon
            name={'calendar-clock'}
            size={ICON_SIZE} color={ICON_COLOR}
            style={itemIconStyle}
          />
          <Text style={dataPointTextStyle}>
            {` ${data.dt_txt}`}
          </Text>
        </View>
        <View style={itemDescriptionContainerStyle}>
          <View style={{ flexDirection: 'row' }} >
            <Image
              source={{ uri: `http://openweathermap.org/img/w/${icon}.png` }}
               style={{ width: 45, height: 23 }}
            />
            <Text style={{ ...dataPointTextStyle, alignSelf: 'center' }}>
              {` ${description.charAt(0).toUpperCase() + description.slice(1)}`}
            </Text>
          </View>
        </View>
      </View>

      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: 'row' }} >
          <Icon
            name={'thermometer-lines'}
            size={ICON_SIZE} color={ICON_COLOR}
            style={itemIconStyle}
          />
          <Text style={dataPointTextStyle}>
            {` ${(data.main.temp - TEMPERATURE_OFFSET).toFixed(2)} C˚`}
          </Text>
        </View>

        <View style={{ flexDirection: 'row' }} >
          <Icon
            name={'water'}
            size={ICON_SIZE} color={ICON_COLOR}
            style={itemIconStyle}
          />
          <Text style={dataPointTextStyle}>
            {` ${data.main.humidity} %`}
          </Text>
        </View>

        <View style={{ flexDirection: 'row' }} >
          <Icon
            name={'weight'}
            size={ICON_SIZE} color={ICON_COLOR}
            style={itemIconStyle}
          />
          <Text style={dataPointTextStyle}>
            {` ${data.main.pressure} hPa`}
          </Text>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <Icon
            name={'weather-windy'}
            size={ICON_SIZE} color={ICON_COLOR}
            style={itemIconStyle}
          />
          <Text style={dataPointTextStyle}>
            {` ${data.wind.speed} mph ${DIRECTIONS[direction % DIRECTIONS.length]}`}
          </Text>
        </View>
      </View>
    </View>
  );
};


export { WeatherItem };
