import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';

import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

import { connect } from 'react-redux';

import * as actions from '../actions';

class App extends Component {
  render() {
    const dialogActions = [
      <FlatButton
        label="Cancel"
        primary
        onTouchTap={this.props.closeModal}
      />,
      <FlatButton
        label="Submit"
        primary
        keyboardFocused
        onTouchTap={this.props.closeModal}
      />,
    ];
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React Boiler Project</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload. 
        </p>

        <p className="App-intro">
          Also you can hide the redux devtools panel pressing the keys CTRL + H.
        </p>

        <RaisedButton label="Awesome Material Button!" primary onTouchTap={this.props.openModal} />

        <Dialog
          title="Wow"
          actions={dialogActions}
          modal={false}
          open={this.props.open}
          onRequestClose={this.props.closeModal}
        >
          Now you can use React Material UI for build awesome applications!
        </Dialog>
      </div>
    );
  }
}

function mapToProps({ modal: { open } }) {
  return { open };
}


export default connect(mapToProps, actions)(App);
