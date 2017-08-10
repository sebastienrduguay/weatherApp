import _ from 'lodash';
import React, { Component } from 'react';
import { ListView, View, Text } from 'react-native';
import { width } from 'react-native-dimension';
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
      <View>
        <View style={{ flexDirection: 'row', backgroundColor: 'lightgrey', borderColor: '#068785', borderTopWidth: 2 }}>
          <Text style={{ padding: 10, width: width(42) }}>City</Text>
          <Text style={{ paddingTop: 10, width: width(16) }}>Country</Text>
          <Text style={{ padding: 10, width: width(33) }}>Date</Text>
        </View>
        <ListView
        style={{ borderColor: '#068785', borderTopWidth: 20, borderBottomWidth: 18 }}
          enableEmptySections
          dataSource={this.dataSource}
          renderRow={this.renderRow.bind(this)}
        />
      </View>
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
