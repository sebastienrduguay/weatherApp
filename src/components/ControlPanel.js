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
      break;
      case CONTROL_PANEL_LABELS[2]:
        Actions.weatherSearch();
      break;
      case CONTROL_PANEL_LABELS[3]:
      break;
      case CONTROL_PANEL_LABELS[4]:
      break;
      case CONTROL_PANEL_LABELS[5]:
      break;
      case CONTROL_PANEL_LABELS[6]:
      break;
      default:
      return;
    }
  }

  renderControlPanelItems() {
    const { controlPanelItemStyle } = styles;
    return CONTROL_PANEL_LABELS.map((value, i) => {
      return (
        <TouchableOpacity key={i} onPress={() => {this.onControlPanelSelection(value)}}>
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
      { this.renderControlPanelItems() }
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
    marginTop: 30
  }
}

export default ControlPanel;
