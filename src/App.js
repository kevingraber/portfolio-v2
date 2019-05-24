import React from 'react';
import logo from './logo.svg';
import './App.css';
import HelloMessage from './components/project';

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
          Learn React!!
        </a>
      </header>
      <p>Some things I've worked on!</p>
      <hr />
      <div id="box-container">
          <div class="box" id="box1">
            <div class="tag-area">
                <div class="tag"><i class="fab fa-python"></i></div>
                <div class="tag"><i class="fab fa-raspberry-pi"></i></div>
                <div class="tag"><i class="fas fa-cubes"></i></div>
            </div>
          </div>
          <div class="box">
              <div class="tag-area">
                  <div class="tag"><i class="fab fa-node-js"></i></div>
                  <div class="tag"><i class="fas fa-database"></i></div>
              </div>
          </div>
          <div class="box">
          <div class="tag-area">
              <div class="tag"><i class="fab fa-aws"></i></div>
              <div class="tag"><i class="fas fa-fire-alt"></i></div>
              <div class="tag"><i class="fas fa-satellite-dish"></i></div>
          </div>
          </div>
          <div class="box">
          <div class="tag-area">
              <div class="tag"><i class="fab fa-react"></i></div>
          </div>
          </div>
          <div class="box">
          <div class="tag-area">
              <div class="tag"><i class="far fa-hdd"></i></div>
              <div class="tag"><i class="fas fa-server"></i></div>
              <div class="tag"><i class="fab fa-raspberry-pi"></i></div>
              <div class="tag"><i class="fab fa-ubuntu"></i></div>
          </div>
          </div>
          <div class="box"></div>
       </div>
    </div>
  );
}

export default App;
