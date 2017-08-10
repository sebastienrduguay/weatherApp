import React from 'react';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { width } from 'react-native-dimension';
import { View, Text, TouchableOpacity } from 'react-native';

import { itemHistoryContainerStyle } from '../styles/containerStyles';

const ICON_SIZE = 16;
const ICON_COLOR = '#068785';

export const WeatherHistoryItem = ({ data, uid, onDelete }) => {
  const { city } = data;
  const { list } = data;
  return (
    <View style={itemHistoryContainerStyle}>
      <TouchableOpacity onPress={() => Actions.weatherShow({ data, send: false })}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
            <Text
              style={{ paddingLeft: 10, width: width(38), alignSelf: 'center' }}
            >{city.name}</Text>
            <Text
              style={{ width: width(8), alignSelf: 'center' }}
            >{city.country}</Text>
            <Text
              style={{ width: width(47), alignSelf: 'center' }}
            >{list[0].dt_txt}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity >
        <View style={{ width: width(8), height: 30, justifyContent: 'center' }}>
          <Icon
            style={{ paddingRight: 10, alignSelf: 'center' }}
            name={'delete'}
            size={ICON_SIZE}
            color={ICON_COLOR}
            onPress={() => onDelete({ uid })}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};
