import React from 'react';
import ReactDOM from 'react-dom';

import { MuiThemeProvider, createTheme } from '@material-ui/core/styles'

import App from './App'

const title = 'React with Webpack and Babel';

const theme = createTheme({
    palette: {
        main: {
            black: '#0b090a',
            charcoal: '#161a1d',
            blood: '#660708',
            darkRed: '#a4161a',
            red: '#ba181b',
            lightRed: '#e5383b',
            darkGrey: '#b1a7a6',
            grey: '#d3d3d3',
            lightGrey: '#f5f3f4',
            white: '#FFFFFF',
            green: '#105408',
            lightGreen: '#18780d'
        }
    }
});


ReactDOM.render(
    (<MuiThemeProvider theme={theme}>
        <App title={title} style='height:100%;' />
    </MuiThemeProvider>),
    document.getElementById('app')
);

module.hot.accept();