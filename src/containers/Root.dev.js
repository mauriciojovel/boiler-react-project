import React, { Component } from 'react';
import { Provider } from 'react-redux';
import App from '../router';
import DevTools from './DevTools';
import Theme from '../themes';

export default class Root extends Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <div>
          <Theme>
            <App />
          </Theme>
          <DevTools />
        </div>
      </Provider>
    );
  }
}
