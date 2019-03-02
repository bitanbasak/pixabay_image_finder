import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './components/navbar/NavBar';
import Search from './components/search/Search';

class App extends React.Component {
  render() {
    return(
      <MuiThemeProvider>
        <div>
          <NavBar />
          <div className="searchBody">
            <Search />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
