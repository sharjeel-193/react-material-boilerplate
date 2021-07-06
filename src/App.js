
import { ThemeProvider, Typography, AppBar, Box, makeStyles, LinearProgress, Toolbar, Link} from '@material-ui/core';

import './App.css';
import theme from "./theme"
import Routes from './Routes'
import { Provider } from 'react-redux';
import store from './redux-store/store'


function App() {
  
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Routes />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
