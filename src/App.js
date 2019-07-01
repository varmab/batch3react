import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome'
import Counter from './Counter'
import Friends from './Friends'
import Contact from './Contact'
import Todos from './Todos'

const Greeting=(props)=>{
  return(
    <h1>{props.children} Happy New Year, {props.year}</h1>
  )
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Welcome title="Varma" year={2020} password="welcome"/>
          <Welcome title="Ram" year={2018} password="12321321"/>
          <Welcome year={2019} password="12321321"/>
        </header>
        <Todos/>
      </div>
    );
  }
}

export default App;
