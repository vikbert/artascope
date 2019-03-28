import React, {Component} from 'react';
import './view/index.css';
import CounterDialog from './components/CounterDialog';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CounterDialog/>
      </div>
    );
  }
}

export default App;
