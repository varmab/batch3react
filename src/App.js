import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Welcome title="Varma" year={2020}/>
          <Welcome title="Ram"/>
          <Welcome title="Rani"/>
        </header>
        <input type="text"/>
      </div>
    );
  }
}

export default App;
