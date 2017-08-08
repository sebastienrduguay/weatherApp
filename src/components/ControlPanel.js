import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { logout } from '../actions/AuthActions';

const ANONYMUS_CONTROL_PANEL = ['Login', 'Search', 'Help'];
const LOGGED_CONTROL_PANEL = ['Logout', 'Search', 'History', 'Profile', 'Help'];

class ControlPanel extends Component {
  onAnonymusControlPanelSelection(value) {
    switch (value) {
      case ANONYMUS_CONTROL_PANEL[0]:
        Actions.authenticate();
      break;
      case ANONYMUS_CONTROL_PANEL[1]:
        Actions.weatherSearch();
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
        Actions.authenticate();
      break;
      case LOGGED_CONTROL_PANEL[1]:
        Actions.weatherSearch
      break;
      case LOGGED_CONTROL_PANEL[2]://History
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

  renderControlPanelItems(controlPanelLabels, onSelection) {
    const { controlPanelItemStyle } = styles;
    return controlPanelLabels.map((value, i) => {
      return (
        <TouchableOpacity
          key={i}
          onPress={() => {onSelection(value)}}
        >
          <View style={controlPanelItemStyle}>
            <Text>{value}</Text>
          </View>
        </TouchableOpacity>
      );
    });
  }

  render() {
    console.log(this);
    const { user } = this.props;
    let panel = (user !== null) ? LOGGED_CONTROL_PANEL : ANONYMUS_CONTROL_PANEL;
    let panelSelection = (user !== null) ? this.onLoggedControlPanelSelection.bind(this) : this.onAnonymusControlPanelSelection.bind(this);
    const { controlPanelContainerStyle } = styles;
    return (
      <View style={controlPanelContainerStyle}>
      {this.renderControlPanelItems(panel, panelSelection)}
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

const mapStateToProps = ({ auth, openDrawer, closeDrawer }) => {
  const { user } = auth;
  return { user };
};

export default connect(
  mapStateToProps, { logout }
)(ControlPanel);
