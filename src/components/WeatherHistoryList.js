import _ from 'lodash';
import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import { weatherHistoryFetch, weatherHistoryDelete } from '../actions/WeatherHistoryActions';
import { WeatherHistoryItem } from './WeatherHistoryItem';

class WeatherHistoryList extends Component {
  componentWillMount() {
    this.props.weatherHistoryFetch();
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ weatherHistory }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(weatherHistory);
  }

  renderRow(weatherData) {
    return (
      <WeatherHistoryItem
        data={weatherData.data}
        uid={weatherData.uid}
        onDelete={this.props.weatherHistoryDelete.bind(this)}
      />
    );
  }

  render() {
    return (
      <ListView
      style={{ borderColor: '#068785', borderTopWidth: 20, borderBottomWidth: 18 }}
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow.bind(this)}
      />
    );
  }
}

const mapStateToProps = state => {
  const weatherHistory = _.map(state.weatherHistory, (val, uid) => {
    return { ...val, uid };
  });
  return { weatherHistory };
};

export default connect(
  mapStateToProps,
  { weatherHistoryFetch, weatherHistoryDelete }
)(WeatherHistoryList);
