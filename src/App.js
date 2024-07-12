import logo from './logo.svg';
import React from 'react';
import './App.css';
import Todos from './components/Todos/Todos';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
        <div>welcome to reactjs</div>
        <h2>This is new title</h2>
        <Todos title='Todos with Pau En Piang'/>
      </header>
        
    </div>
  );
}

export default App;
