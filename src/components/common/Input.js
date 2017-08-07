import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
  const { inputStyle, labelStyle, containerStyle } = styles;
  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        autoCorrect={false}
        placeholder={placeholder}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    height: 30,
    flex: 2,
    backgroundColor: 'white',
    margin: 0,
    marginRight: 35
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    height: 30,
    margin: 0,
    flex: 1,
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  containerStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'

  }
};

export { Input };
