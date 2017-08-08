import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

const CONTROL_PANEL_LABELS = ['Login', 'Search', 'History', 'Profile', 'Help'];

class ControlPanel extends Component {
  onControlPanelSelection(value) {
    switch (value) {
      case CONTROL_PANEL_LABELS[0]:
        Actions.authenticate();
      break;
      case CONTROL_PANEL_LABELS[1]:
        Actions.weatherSearch();
      break;
      case CONTROL_PANEL_LABELS[2]:
      break;
      case CONTROL_PANEL_LABELS[3]:
      break;
      case CONTROL_PANEL_LABELS[4]:
      break;
      default:
      return;
    }
  }

  renderControlPanelItems() {
    const { controlPanelItemStyle } = styles;
    return CONTROL_PANEL_LABELS.map((value, i) => {
      return (
        <TouchableOpacity
          key={i}
          onPress={() => {this.onControlPanelSelection(value)}}
        >
          <View style={controlPanelItemStyle}>
            <Text>{value}</Text>
          </View>
        </TouchableOpacity>
      );
    });
  }

  render() {
    const { controlPanelContainerStyle } = styles;
    return (
      <View style={controlPanelContainerStyle}>
      {this.renderControlPanelItems()}
      </View>
    );
  }
}

const styles = {
  controlPanelItemStyle: {
    justifyContent: 'center',
    height: 30,
    borderBottomWidth: 2,
    borderBottomColor: '#068785',
    paddingLeft: 30
  },
  controlPanelContainerStyle: {
    borderTopWidth: 2,
    borderTopColor: '#068785',
    marginTop: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 2
  }
}

export default ControlPanel;
