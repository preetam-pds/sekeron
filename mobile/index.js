/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import 'react-native-gesture-handler';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import {createStore} from '@sekeron/domain';
import { Provider as PaperProvider } from 'react-native-paper';
import { theme } from './src/sekeron-mobile-theme/SekeronMobileTheme';

const {store} = createStore();

const Sekeron = () => (
  <PaperProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </PaperProvider>
);

AppRegistry.registerComponent(appName, () => Sekeron);
