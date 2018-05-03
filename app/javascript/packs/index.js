import React from 'react';
import {render} from 'react-dom';
import Header from 'components/header';

import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles';
import blue from 'material-ui/colors/blue';

const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
});


function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <div>
        <Header/>
      </div>
    </MuiThemeProvider>
  );
}

render(<App />, document.querySelector('#app'));
