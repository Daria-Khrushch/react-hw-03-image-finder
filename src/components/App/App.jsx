import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from '../NavBar/NavBar';
import SearchBar from '../SearchBar/SearchBar';
// import s from './App.module.css';

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <NavBar />
          <SearchBar />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
