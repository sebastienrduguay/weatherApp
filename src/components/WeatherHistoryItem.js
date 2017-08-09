import React from 'react';
import { Actions } from 'react-native-router-flux';
import { View, Text, TouchableOpacity } from 'react-native';
import {
  historyItemCityTextStyle,
  historyItemCountryTextStyle,
  historyItemDateTextStyle
} from '../styles/textStyles';
import { itemHistoryContainerStyle } from '../styles/containerStyles';

export const WeatherHistoryItem = ({ data }) => {
  console.log(data);
  const { city } = data;
  const { list } = data;
  return (
    <TouchableOpacity onPress={() => Actions.weatherShow({ data, send: false })}>
      <View style={itemHistoryContainerStyle}>
        <Text style={historyItemCityTextStyle}>{city.name}</Text>
        <Text style={historyItemCountryTextStyle}>{city.country}</Text>
        <Text style={historyItemDateTextStyle}>{list[0].dt_txt}</Text>
      </View>
    </TouchableOpacity>
  );
};
