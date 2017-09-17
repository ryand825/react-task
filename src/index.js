import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { HashRouter as Router } from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { green300 } from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: green300
    }
})


ReactDOM.render(
    <MuiThemeProvider muiTheme={muiTheme}>
        <Router>
            <App />
        </Router>
    </MuiThemeProvider>,
    document.getElementById('root'));
registerServiceWorker();
