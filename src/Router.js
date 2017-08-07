import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import WeatherSearchForm from './components/WeatherSearchForm';
import WeatherForecast from './components/WeatherForecast';
import Authenticate from './components/Authenticate';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene>
        <Scene initial key="authenticate" component={Authenticate} title="Login" />
        <Scene key="weatherSearch" component={WeatherSearchForm} title="Search" />
        <Scene key="weatherShow" component={WeatherForecast} title="Weather Forecast" />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
