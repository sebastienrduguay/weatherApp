import React from 'react';
import { Actions } from 'react-native-router-flux';
import { View, Text, TouchableOpacity } from 'react-native';

export const WeatherHistoryItem = ({ data }) => {
  console.log(data);
  const { city } = data;
  const { list } = data;
  return (
    <TouchableOpacity onPress={() => Actions.weatherShow({ data, send: false })}>
      <View style={{ flexDirection: 'row', height: 30, borderColor: '#068785', borderBottomWidth: 2 }}>
        <Text style={{ flex: 1.5, marginLeft: 15, alignSelf: 'center' }}>{city.name}</Text>
        <Text style={{ flex: 0.5, alignSelf: 'center' }}>{city.country}</Text>
        <Text style={{ flex: 2, marginRight: 15, alignSelf: 'center' }}>{list[0].dt_txt}</Text>
      </View>
    </TouchableOpacity>
  );
};
