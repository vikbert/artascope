import React, {Component} from 'react';
import './view/index.css';
import AppBar from './components/AppBar'
import CounterDialog from './components/CounterDialog';
import GithubCardsDialog from './components/GithubCardsDialog';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar/>
        <CounterDialog/>
        <GithubCardsDialog />
      </div>
    );
  }
}

export default App;
