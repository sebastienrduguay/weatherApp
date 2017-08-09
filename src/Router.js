import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import WeatherSearchForm from './components/WeatherSearchForm';
import WeatherForecast from './components/WeatherForecast';
import Authenticate from './components/Authenticate';
import WeatherHistoryList from './components/WeatherHistoryList';

const RouterComponent = () => (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene>
        <Scene initial key="authenticate" component={Authenticate} title="Login" />
        <Scene key="weatherSearch" component={WeatherSearchForm} title="Search" />
        <Scene key="weatherShow" component={WeatherForecast} title="Weather Forecast" />
        <Scene key="weatherHistory" component={WeatherHistoryList} title="History" />
      </Scene>
    </Router>
  );

export default RouterComponent;
