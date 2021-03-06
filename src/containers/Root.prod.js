import React, { Component } from 'react';
import { Provider } from 'react-redux';
import App from '../router';
import Theme from '../themes';

export default class Root extends Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <Theme>
          <App />
        </Theme>
      </Provider>
    );
  }
}
