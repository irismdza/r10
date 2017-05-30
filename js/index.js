/**
 * R10 App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { NavigationContext, NavigationProvider, StackNavigation } from '@expo/ex-navigation';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';

import Router from './navigation/router';
import Store from './redux/store';
import About from './scenes/About';

const navigationContext = new NavigationContext({
  router: Router,
  store: Store,
})

export default class R10 extends Component {

  render() {
    return (
      <Provider store={Store}>
        <NavigationProvider router={Router} context={navigationContext}>
          <StatusBar barStyle="light-content" />
          <StackNavigation initialRoute={Router.getRoute('navigation')} />
        </NavigationProvider>
      </Provider>
    );
  }
}