import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar.js';
import Header from './Components/Header.js';
class App extends Component {
  render() {
    return (
      <div>
        <Header> </Header>
        <Navbar></Navbar>
      </div>

    );
  }
}

export default App;
