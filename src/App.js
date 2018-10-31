import React, { Component } from 'react';
import logo from './logo.svg';
import Main from './Components/Main.js';
import './App.css';

class App extends Component {
  handleButtonPress = () => {
      console.log('deneme');
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>TEDxHadi</h1>
          <input type="text" name="text" placeholder="İsminiz" ></input>

          <button className="btn orange" type="button" onKeyPress={ this.handleButtonPress } ><span>Hadi Başlayalım</span></button>


          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
