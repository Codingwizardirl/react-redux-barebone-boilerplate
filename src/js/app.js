import React from 'react';
import ReactDom from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { MuiThemeProvider } from 'material-ui';
import Layout from './components/Layout';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();
const app = document.getElementById('app');

const App = () => (
  <MuiThemeProvider>
    <Layout />
  </MuiThemeProvider>
);

ReactDom.render(<App />, app);
