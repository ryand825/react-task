import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import router from './router';

import { green300 } from 'material-ui/styles/colors';

import Nav from './components/Nav/Nav';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: green300
  }
})

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        {router}
      </div>
    );
  }
}

export default App;