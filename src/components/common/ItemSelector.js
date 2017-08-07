import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

const ItemSelector = ({
  children, onPreviousDataPoint, onNextDataPoint, showPrevious, showNext }) => {
  return (
    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
      <View style={{ backgroundColor: 'rgba(0,0,0,0)', flex: 0.5 }}>
        {renderChevron('chevron-left', showPrevious, 40, 'white', onPreviousDataPoint)}
      </View>
      <View style={{ backgroundColor: 'rgba(0,0,0,0)', alignItems: 'center', alignContent: 'center', justifyContent: 'center', flex: 3 }}>
        {children}
      </View>
      <View style={{ backgroundColor: 'rgba(0,0,0,0)', flex: 0.5 }}>
        {renderChevron('chevron-right', showNext, 40, 'white', onNextDataPoint)}
      </View>
    </View>
  );
};

const renderChevron = (name, show, size, color, onPress ) => {
  return  ( show ? (
    <TouchableOpacity onPress={onPress}>
      <Icon name={name} size={size} color={color} />
    </TouchableOpacity>
  ) : (<View/>) );
}

export { ItemSelector };
