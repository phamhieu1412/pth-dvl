import React, { Component } from 'react';
import { LogBox } from 'react-native';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/es/integration/react';

import store from './src/store/configureStore';
import Router from './src/Router';
import { Languages } from './src/common';

class App extends Component {
  componentDidMount() {
     LogBox.ignoreLogs([
       'componentWillMount has been renamed', // turn off untill we upgrade/replace tcomb-form-native and react-native-fluid-slider.
       'componentWillReceiveProps has been renamed', // turn off untill we upgrade/replace tcomb-form-native and react-native-fluid-slider.
     ]);

    const language = 'vi'; // store.getState().language;
    // set default Language for App
    Languages.setLanguage(language);

  }

  render() {
    const persistor = persistStore(store);
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Router />
        </PersistGate>
      </Provider>
    );
  }
}

export default App;