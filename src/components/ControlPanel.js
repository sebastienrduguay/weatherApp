import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { logout } from '../actions/AuthActions';
import {
  controlPanelContainerStyle,
  controlPanelItemStyle
} from '../styles/controlPanelStyles';
import { itemIconStyle } from '../styles/iconStyles';

const ANONYMUS_CONTROL_PANEL = ['Login', 'Search', 'Help'];
const ANONYMUS_ICONS = ['login', 'magnify', 'help'];
const LOGGED_CONTROL_PANEL = ['Logout', 'Search', 'History', 'Profile', 'Help'];
const LOGGED_ICONS = ['logout', 'magnify', 'database', 'account', 'help'];
const ICON_SIZE = 16;
const ICON_COLOR = '#068785';

class ControlPanel extends Component {
  onAnonymusControlPanelSelection(value) {
    switch (value) {
      case ANONYMUS_CONTROL_PANEL[0]:
        Actions.authenticate({ type: 'reset' });
      break;
      case ANONYMUS_CONTROL_PANEL[1]:
        Actions.weatherSearch({ type: 'reset' });
      break;
      case ANONYMUS_CONTROL_PANEL[2]://Help
      break;
      default:
      return;
    }
    this.props.closeDrawer();
  }

  onLoggedControlPanelSelection(value) {
    switch (value) {
      case LOGGED_CONTROL_PANEL[0]://Logout
        this.props.logout();
        Actions.authenticate({ type: 'reset' });
      break;
      case LOGGED_CONTROL_PANEL[1]:
        Actions.weatherSearch({ type: 'reset' });
      break;
      case LOGGED_CONTROL_PANEL[2]://History
        Actions.weatherHistory({ type: 'reset' });
      break;
      case LOGGED_CONTROL_PANEL[3]://Profile
      break;
      case LOGGED_CONTROL_PANEL[4]://Help
      break;
      default:
      return;
    }
    this.props.closeDrawer();
  }

  renderControlPanelItems(controlPanelLabels, onSelection, icons) {
    return controlPanelLabels.map((value, i) => (
        <TouchableOpacity
          key={i}
          onPress={() => { onSelection(value); }}
        >
          <View style={controlPanelItemStyle}>
            <View style={{ flex: 0.2 }}>
              <Icon
                name={icons[i]}
                size={ICON_SIZE}
                color={ICON_COLOR}
                style={itemIconStyle}
              />
            </View>
            <Text style={{ flex: 2 }}>{value}</Text>
          </View>
        </TouchableOpacity>
      )
    );
  }

  render() {
    const { user } = this.props;
    const panel = (user !== null)
      ? LOGGED_CONTROL_PANEL
      : ANONYMUS_CONTROL_PANEL;
    const icons = (user !== null)
      ? LOGGED_ICONS
      : ANONYMUS_ICONS;
    const panelSelection = (user !== null)
      ? this.onLoggedControlPanelSelection.bind(this)
      : this.onAnonymusControlPanelSelection.bind(this);
    return (
      <View style={controlPanelContainerStyle}>
      {this.renderControlPanelItems(panel, panelSelection, icons)}
      </View>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  const { user } = auth;
  return { user };
};

export default connect(
  mapStateToProps, { logout }
)(ControlPanel);
