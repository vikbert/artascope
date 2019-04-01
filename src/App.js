import React, {Component} from 'react';
import './view/index.css';
import AppBar from './components/AppBar'
import CounterDialog from './components/CounterDialog';
import GithubCardsDialog from './components/GithubCardsDialog';
import ReactTodoDialog from "./components/ReactTodoDialog";
import ReduxTodoDialog from "./components/ReduxTodoDialog";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar/>
        <CounterDialog/>
        <GithubCardsDialog />
        <ReduxTodoDialog />
        <ReactTodoDialog />
      </div>
    );
  }
}

export default App;
