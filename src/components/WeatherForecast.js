import React, { Component } from 'react';
import { Text, View, ImageBackground } from 'react-native';
import MapView from 'react-native-maps';
import { connect } from 'react-redux';
import { width, height } from 'react-native-dimension';
import {
  temperaturesChanged,
  humiditiesChanged,
  pressuresChanged,
  latChanged,
  lonChanged,
  tickValuesChanged,
  dataSelectedChanged,
  dataPointChanged
} from '../actions/WeatherShowActions';
import { WeatherItem } from './WeatherItem'
import { Card, CardSection, Button, ItemSelector, LineChart } from './common';


const DATA_TITLES = [ 'Temprerature', 'Humidity', 'Pressure' ];
/*const data = {
  "cod":"200","message":0.0046,"cnt":40,"list":[{"dt":1501178400,"main":{"temp":298.69,"temp_min":296.86,"temp_max":298.69,"pressure":1015.99,"sea_level":1022.95,"grnd_level":1015.99,"humidity":89,"temp_kf":1.83},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],"clouds":{"all":44},"wind":{"speed":5.21,"deg":256.502},"rain":{},"sys":{"pod":"d"},"dt_txt":"2017-07-27 18:00:00"},{"dt":1501189200,"main":{"temp":298.42,"temp_min":297.049,"temp_max":298.42,"pressure":1015.53,"sea_level":1022.49,"grnd_level":1015.53,"humidity":79,"temp_kf":1.37},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":{"all":48},"wind":{"speed":5.01,"deg":282.002},"rain":{"3h":0.005},"sys":{"pod":"d"},"dt_txt":"2017-07-27 21:00:00"},{"dt":1501200000,"main":{"temp":296.13,"temp_min":295.214,"temp_max":296.13,"pressure":1016.26,"sea_level":1023.16,"grnd_level":1016.26,"humidity":71,"temp_kf":0.92},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03n"}],"clouds":{"all":48},"wind":{"speed":4.47,"deg":311.501},"rain":{},"sys":{"pod":"n"},"dt_txt":"2017-07-28 00:00:00"},{"dt":1501210800,"main":{"temp":292.06,"temp_min":291.603,"temp_max":292.06,"pressure":1017.62,"sea_level":1024.59,"grnd_level":1017.62,"humidity":79,"temp_kf":0.46},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":3.76,"deg":327.009},"rain":{},"sys":{"pod":"n"},"dt_txt":"2017-07-28 03:00:00"},{"dt":1501221600,"main":{"temp":289.541,"temp_min":289.541,"temp_max":289.541,"pressure":1018.54,"sea_level":1025.5,"grnd_level":1018.54,"humidity":81,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":4.3,"deg":341.002},"rain":{},"sys":{"pod":"n"},"dt_txt":"2017-07-28 06:00:00"},{"dt":1501232400,"main":{"temp":287.377,"temp_min":287.377,"temp_max":287.377,"pressure":1019.21,"sea_level":1026.24,"grnd_level":1019.21,"humidity":81,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":3.86,"deg":353.501},"rain":{},"sys":{"pod":"n"},"dt_txt":"2017-07-28 09:00:00"},{"dt":1501243200,"main":{"temp":289.078,"temp_min":289.078,"temp_max":289.078,"pressure":1020.48,"sea_level":1027.43,"grnd_level":1020.48,"humidity":85,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"02d"}],"clouds":{"all":8},"wind":{"speed":3.47,"deg":0.0038147},"rain":{},"sys":{"pod":"d"},"dt_txt":"2017-07-28 12:00:00"},{"dt":1501254000,"main":{"temp":292.536,"temp_min":292.536,"temp_max":292.536,"pressure":1020.71,"sea_level":1027.53,"grnd_level":1020.71,"humidity":94,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":2.07,"deg":22.5005},"rain":{},"sys":{"pod":"d"},"dt_txt":"2017-07-28 15:00:00"},{"dt":1501264800,"main":{"temp":294.543,"temp_min":294.543,"temp_max":294.543,"pressure":1019.6,"sea_level":1026.47,"grnd_level":1019.6,"humidity":91,"temp_kf":0},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02d"}],"clouds":{"all":20},"wind":{"speed":2.08,"deg":284.508},"rain":{},"sys":{"pod":"d"},"dt_txt":"2017-07-28 18:00:00"},{"dt":1501275600,"main":{"temp":295.875,"temp_min":295.875,"temp_max":295.875,"pressure":1018.54,"sea_level":1025.48,"grnd_level":1018.54,"humidity":74,"temp_kf":0},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02d"}],"clouds":{"all":20},"wind":{"speed":2.41,"deg":317},"rain":{},"sys":{"pod":"d"},"dt_txt":"2017-07-28 21:00:00"},{"dt":1501286400,"main":{"temp":293.415,"temp_min":293.415,"temp_max":293.415,"pressure":1019.07,"sea_level":1025.98,"grnd_level":1019.07,"humidity":64,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":3.19,"deg":350.5},"rain":{},"sys":{"pod":"n"},"dt_txt":"2017-07-29 00:00:00"},{"dt":1501297200,"main":{"temp":289.042,"temp_min":289.042,"temp_max":289.042,"pressure":1020.47,"sea_level":1027.46,"grnd_level":1020.47,"humidity":61,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":4.81,"deg":1.00198},"rain":{},"sys":{"pod":"n"},"dt_txt":"2017-07-29 03:00:00"},{"dt":1501308000,"main":{"temp":287.058,"temp_min":287.058,"temp_max":287.058,"pressure":1021.02,"sea_level":1028,"grnd_level":1021.02,"humidity":66,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":4.81,"deg":5.00183},"rain":{},"sys":{"pod":"n"},"dt_txt":"2017-07-29 06:00:00"},{"dt":1501318800,"main":{"temp":285.567,"temp_min":285.567,"temp_max":285.567,"pressure":1021.75,"sea_level":1028.79,"grnd_level":1021.75,"humidity":73,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":4.38,"deg":8.50314},"rain":{},"sys":{"pod":"n"},"dt_txt":"2017-07-29 09:00:00"},{"dt":1501329600,"main":{"temp":288.064,"temp_min":288.064,"temp_max":288.064,"pressure":1023.02,"sea_level":1030.07,"grnd_level":1023.02,"humidity":75,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":4.86,"deg":22.5068},"rain":{},"sys":{"pod":"d"},"dt_txt":"2017-07-29 12:00:00"},{"dt":1501340400,"main":{"temp":292.357,"temp_min":292.357,"temp_max":292.357,"pressure":1023.69,"sea_level":1030.58,"grnd_level":1023.69,"humidity":75,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":4.81,"deg":34.004},"rain":{},"sys":{"pod":"d"},"dt_txt":"2017-07-29 15:00:00"},{"dt":1501351200,"main":{"temp":294.081,"temp_min":294.081,"temp_max":294.081,"pressure":1023.18,"sea_level":1030.04,"grnd_level":1023.18,"humidity":72,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":4.12,"deg":26.502},"rain":{},"sys":{"pod":"d"},"dt_txt":"2017-07-29 18:00:00"},{"dt":1501362000,"main":{"temp":295.134,"temp_min":295.134,"temp_max":295.134,"pressure":1022.4,"sea_level":1029.26,"grnd_level":1022.4,"humidity":67,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":3.02,"deg":9.50323},"rain":{},"sys":{"pod":"d"},"dt_txt":"2017-07-29 21:00:00"},{"dt":1501372800,"main":{"temp":292.713,"temp_min":292.713,"temp_max":292.713,"pressure":1022.48,"sea_level":1029.49,"grnd_level":1022.48,"humidity":67,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":2.51,"deg":358.001},"rain":{},"sys":{"pod":"n"},"dt_txt":"2017-07-30 00:00:00"},{"dt":1501383600,"main":{"temp":287.893,"temp_min":287.893,"temp_max":287.893,"pressure":1023.13,"sea_level":1030.13,"grnd_level":1023.13,"humidity":69,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":3.26,"deg":354.001},"rain":{},"sys":{"pod":"n"},"dt_txt":"2017-07-30 03:00:00"},{"dt":1501394400,"main":{"temp":285.495,"temp_min":285.495,"temp_max":285.495,"pressure":1023.71,"sea_level":1030.89,"grnd_level":1023.71,"humidity":79,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":1.72,"deg":324.002},"rain":{},"sys":{"pod":"n"},"dt_txt":"2017-07-30 06:00:00"},{"dt":1501405200,"main":{"temp":284.243,"temp_min":284.243,"temp_max":284.243,"pressure":1024.28,"sea_level":1031.31,"grnd_level":1024.28,"humidity":80,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":1.66,"deg":302.001},"rain":{},"sys":{"pod":"n"},"dt_txt":"2017-07-30 09:00:00"},{"dt":1501416000,"main":{"temp":291.407,"temp_min":291.407,"temp_max":291.407,"pressure":1025.33,"sea_level":1032.28,"grnd_level":1025.33,"humidity":88,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":1.77,"deg":271.501},"rain":{},"sys":{"pod":"d"},"dt_txt":"2017-07-30 12:00:00"},{"dt":1501426800,"main":{"temp":296.139,"temp_min":296.139,"temp_max":296.139,"pressure":1025.59,"sea_level":1032.54,"grnd_level":1025.59,"humidity":77,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":3,"deg":266.501},"rain":{},"sys":{"pod":"d"},"dt_txt":"2017-07-30 15:00:00"},{"dt":1501437600,"main":{"temp":298.481,"temp_min":298.481,"temp_max":298.481,"pressure":1024.52,"sea_level":1031.42,"grnd_level":1024.52,"humidity":71,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":3.83,"deg":263.507},"rain":{},"sys":{"pod":"d"},"dt_txt":"2017-07-30 18:00:00"},{"dt":1501448400,"main":{"temp":299.391,"temp_min":299.391,"temp_max":299.391,"pressure":1023.77,"sea_level":1030.58,"grnd_level":1023.77,"humidity":67,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":4.14,"deg":257.505},"rain":{},"sys":{"pod":"d"},"dt_txt":"2017-07-30 21:00:00"},{"dt":1501459200,"main":{"temp":297.118,"temp_min":297.118,"temp_max":297.118,"pressure":1023.46,"sea_level":1030.37,"grnd_level":1023.46,"humidity":66,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":4.06,"deg":243.001},"rain":{},"sys":{"pod":"n"},"dt_txt":"2017-07-31 00:00:00"},{"dt":1501470000,"main":{"temp":293.934,"temp_min":293.934,"temp_max":293.934,"pressure":1023.79,"sea_level":1030.78,"grnd_level":1023.79,"humidity":72,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":4.37,"deg":235.508},"rain":{},"sys":{"pod":"n"},"dt_txt":"2017-07-31 03:00:00"},{"dt":1501480800,"main":{"temp":292.254,"temp_min":292.254,"temp_max":292.254,"pressure":1023.53,"sea_level":1030.52,"grnd_level":1023.53,"humidity":78,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":4.41,"deg":243.001},"rain":{},"sys":{"pod":"n"},"dt_txt":"2017-07-31 06:00:00"},{"dt":1501491600,"main":{"temp":290.644,"temp_min":290.644,"temp_max":290.644,"pressure":1023.44,"sea_level":1030.42,"grnd_level":1023.44,"humidity":88,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":4.46,"deg":243.004},"rain":{},"sys":{"pod":"n"},"dt_txt":"2017-07-31 09:00:00"},{"dt":1501502400,"main":{"temp":293.243,"temp_min":293.243,"temp_max":293.243,"pressure":1023.91,"sea_level":1030.88,"grnd_level":1023.91,"humidity":86,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":4.11,"deg":250.001},"rain":{},"sys":{"pod":"d"},"dt_txt":"2017-07-31 12:00:00"},{"dt":1501513200,"main":{"temp":298.65,"temp_min":298.65,"temp_max":298.65,"pressure":1023.79,"sea_level":1030.71,"grnd_level":1023.79,"humidity":81,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":3.81,"deg":245},"rain":{},"sys":{"pod":"d"},"dt_txt":"2017-07-31 15:00:00"},{"dt":1501524000,"main":{"temp":301.379,"temp_min":301.379,"temp_max":301.379,"pressure":1022.63,"sea_level":1029.53,"grnd_level":1022.63,"humidity":71,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":3.91,"deg":245.51},"rain":{},"sys":{"pod":"d"},"dt_txt":"2017-07-31 18:00:00"},{"dt":1501534800,"main":{"temp":301.553,"temp_min":301.553,"temp_max":301.553,"pressure":1021.54,"sea_level":1028.49,"grnd_level":1021.54,"humidity":67,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"02d"}],"clouds":{"all":8},"wind":{"speed":3.21,"deg":258.502},"rain":{},"sys":{"pod":"d"},"dt_txt":"2017-07-31 21:00:00"},{"dt":1501545600,"main":{"temp":299.074,"temp_min":299.074,"temp_max":299.074,"pressure":1021.51,"sea_level":1028.54,"grnd_level":1021.51,"humidity":70,"temp_kf":0},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03n"}],"clouds":{"all":44},"wind":{"speed":2.06,"deg":275.003},"rain":{},"sys":{"pod":"n"},"dt_txt":"2017-08-01 00:00:00"},{"dt":1501556400,"main":{"temp":292.409,"temp_min":292.409,"temp_max":292.409,"pressure":1022.79,"sea_level":1029.46,"grnd_level":1022.79,"humidity":95,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10n"}],"clouds":{"all":64},"wind":{"speed":3.25,"deg":13.0014},"rain":{"3h":2.95},"sys":{"pod":"n"},"dt_txt":"2017-08-01 03:00:00"},{"dt":1501567200,"main":{"temp":291.598,"temp_min":291.598,"temp_max":291.598,"pressure":1022.21,"sea_level":1029.08,"grnd_level":1022.21,"humidity":95,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10n"}],"clouds":{"all":24},"wind":{"speed":1.31,"deg":325.001},"rain":{"3h":0.6875},"sys":{"pod":"n"},"dt_txt":"2017-08-01 06:00:00"},{"dt":1501578000,"main":{"temp":290.448,"temp_min":290.448,"temp_max":290.448,"pressure":1022.18,"sea_level":1029.08,"grnd_level":1022.18,"humidity":92,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"02n"}],"clouds":{"all":8},"wind":{"speed":1.16,"deg":310.501},"rain":{},"sys":{"pod":"n"},"dt_txt":"2017-08-01 09:00:00"},{"dt":1501588800,"main":{"temp":294.471,"temp_min":294.471,"temp_max":294.471,"pressure":1023.23,"sea_level":1030.17,"grnd_level":1023.23,"humidity":94,"temp_kf":0},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02d"}],"clouds":{"all":12},"wind":{"speed":2.06,"deg":27.0054},"rain":{},"sys":{"pod":"d"},"dt_txt":"2017-08-01 12:00:00"},{"dt":1501599600,"main":{"temp":298.125,"temp_min":298.125,"temp_max":298.125,"pressure":1023.35,"sea_level":1030.29,"grnd_level":1023.35,"humidity":92,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"02d"}],"clouds":{"all":8},"wind":{"speed":2.21,"deg":55.5173},"rain":{},"sys":{"pod":"d"},"dt_txt":"2017-08-01 15:00:00"}],"city":{"id":6077243,"name":"Montreal","coord":{"lat":45.5088,"lon":-73.5879},"country":"CA"}};
*/
class WeatherForecast extends Component {
  componentWillMount() {
    const { data } = this.props;
    const { list } = data;
    const temperatures = [];
    const humidities = [];
    const pressures = [];
    const tickValues = [];
    const interval = 3;
    this.props.latChanged(data.city.coord.lat);
    this.props.lonChanged(data.city.coord.lon);
    let hours = 0;
    counter = 0;
    list.forEach((element) => {
        let date = new Date(element.dt*1000);
        temperatures.push({ x: date, y: element.main.temp-273.15 });
        humidities.push({ x: date, y: element.main.humidity });
        pressures.push({ x: date, y: element.main.pressure });
        if (counter % 4 === 0) {
          tickValues.push(date);
        }
        hours += 3;
        ++counter;
    });
    this.props.temperaturesChanged(temperatures);
    this.props.humiditiesChanged(humidities);
    this.props.pressuresChanged(pressures);
    this.props.tickValuesChanged(tickValues);
  }

  onTemperatureButtonPressed = () => {
    this.props.dataSelectedChanged(0);
  }

  onHumidityButtonPressed = () => {
    this.props.dataSelectedChanged(1);
  }

  onPressureButtonPressed = () => {
    this.props.dataSelectedChanged(2);
  }

  getSelectedData(index) {
    switch (index) {
      case 0:
        return this.props.temperatures;
        break;
      case 1:
        return this.props.humidities;
        break;
      case 2:
        return this.props.pressures;
        break;
      default:
        return this.props.temperatures;
    }
  }

  onNextDataPoint = () => {
    this.props.dataPointChanged(this.props.dataPointSelected + 1);
  }

  onPreviousDataPoint = () => {
    this.props.dataPointChanged(this.props.dataPointSelected - 1);
  }

  render() {
    const { data } = this.props;
    const { chartSectionStyle, buttonSectionStyle, mapSectionStyle, dataPointTextStyle } = styles;
    const { dataSelected, tickValues, dataPointSelected } = this.props;
    return (
      <View style={{ flex: 1 }}>

      <ImageBackground
        source={require('../../assets/backgroundWeather.png')}
        imageStyle={{ resizeMode: 'stretch'}}
      />
        <View style={ chartSectionStyle }>
          <LineChart
            data={this.getSelectedData(dataSelected)}
            xKey={"x"}
            yKey={"y"}
            width={width(100)}
            height={200}
            title={DATA_TITLES[dataSelected]}
            padding={15}
            tickValues={tickValues}
          />
        </View>

        <View style={{ flex: 0.8, justifyContent: 'center', marginTop: 15, marginLeft: 10}}>
          <ItemSelector
            onPreviousDataPoint={this.onPreviousDataPoint.bind(this)}
            onNextDataPoint={this.onNextDataPoint.bind(this)}
            showPrevious={dataPointSelected === 0 ? false : true}
            showNext={dataPointSelected === data.list.length-1 ? false : true}
          >

            <WeatherItem data={data.list[dataPointSelected]} />
          </ItemSelector>
        </View>

        <View style={ mapSectionStyle }>
          <MapView
            width={width(96)}
            height={200}
            provider={null}
            mapType={"hybrid"}
            initialRegion={{
              latitude: this.props.lat,
              longitude: this.props.lon,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            style={{ borderWidth: 1, borderColor: 'white'}}
          />
        </View>

        <View style={ buttonSectionStyle } >
          <Button onPress={this.onTemperatureButtonPressed.bind(this)} >
            {DATA_TITLES[0]}
          </Button>
          <Button onPress={this.onHumidityButtonPressed.bind(this)} >
            {DATA_TITLES[1]}
          </Button>
          <Button onPress={this.onPressureButtonPressed.bind(this)} >
            {DATA_TITLES[2]}
          </Button>
        </View>

      </View>
    );
  }
}

const colors = {
  DeepRed: '#c62721'
}

const styles = {
  chartSectionStyle: {
    flex: 1.2,
    padding: 0,
    marginTop: 20,
    marginBottom: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonSectionStyle: {
    flex: 0.3,
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 15
  },
  mapSectionStyle: {
    flex: 1.5,
    padding: 0,
    marginBottom: 2,
    alignItems: 'center',
    justifyContent: 'flex-end'
  }
}

const mapStateToProps = ({ weatherForecast }) => {
    const { temperatures, humidities, pressures, lat, lon, tickValues, dataSelected, dataPointSelected } = weatherForecast;
    return { temperatures, humidities, pressures, lat, lon, tickValues, dataSelected, dataPointSelected };
};

export default connect(
  mapStateToProps, {
  temperaturesChanged, humiditiesChanged, pressuresChanged,
  latChanged, lonChanged, tickValuesChanged, dataSelectedChanged,
  dataPointChanged }
)(WeatherForecast);
