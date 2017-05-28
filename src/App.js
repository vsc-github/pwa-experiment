import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-header">
        </div>
          <div className="menu">
              <div className="menu-item">One</div>
              <div className="menu-item">Two</div>
              <div className="menu-item">Three</div>
              <div className="menu-item">Four</div>
          </div>
          <div className="feed">
              <div className="feed-item"></div>
              <div className="feed-item"></div>
              <div className="feed-item"></div>
              <div className="feed-item"></div>
              <div className="feed-item"></div>
              <div className="feed-item"></div>
              <div className="feed-item"></div>
              <div className="feed-item"></div>
              <div className="feed-item"></div>
              <div className="feed-item"></div>
              <div className="feed-item"></div>
              <div className="feed-item"></div>
          </div>
      </div>
    );
  }
}

export default App;
