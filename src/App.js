import React, {Component} from 'react';

import Counter from './components/Counter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter counterInit={50} counterIncrement={10}/> <br/>
      </div>
    );
  }
}

export default App;
