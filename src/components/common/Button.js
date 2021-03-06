import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 12,
    fontWeight: '600',
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: 'rgba(0,0,0,0)'
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#068785',
    borderRadius: 5,
    borderWidth: 1,
    marginTop: 6,
    borderColor: 'white',
    marginLeft: 3,
    marginRight: 3,
    alignItems: 'center',
    justifyContent: 'center'
  }
};
export { Button };
