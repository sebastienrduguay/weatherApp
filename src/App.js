import React, { Component } from 'react';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import { createStore, applyMiddleware } from 'redux';
import Drawer from 'react-native-drawer';
import reducers from './reducers';
import Router from './Router';
import ControlPanel from './components/ControlPanel';
import { drawerStyle } from './styles/controlPanelStyles';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyApywPhOUaNgIsx8jsaZM4sgme99voVQIo',
      authDomain: 'weatherapp-5a548.firebaseapp.com',
      databaseURL: 'https://weatherapp-5a548.firebaseio.com',
      projectId: 'weatherapp-5a548',
      storageBucket: 'weatherapp-5a548.appspot.com',
      messagingSenderId: '556267185887'
    };
    firebase.initializeApp(config);
  }
  closeControlPanel = () => {
    this.drawer.close();
  }
  openControlPanel = () => {
    this.drawer.open();
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Drawer
          ref={(ref) => this.drawer = ref}
          type="overlay"
          disabled={false}
          captureGestures
          content={
            <ControlPanel
              openDrawer={this.openControlPanel.bind(this)}
              closeDrawer={this.closeControlPanel.bind(this)}
            />
          }
          tapToClose
          openDrawerOffset={0.2} // 20% gap on the right side of drawer
          panCloseMask={0.2}
          panOpenMask={0.01}
          closedDrawerOffset={-3}
          styles={drawerStyle}
        >
        <Router />
        </Drawer>
      </Provider>
    );
  }
}

export default App;
