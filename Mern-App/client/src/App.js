import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { provider } from 'react-redux';
import store from 'store.js';
import AppNavbar from './Components/Navbar';
import AddItem from "./Components/AddItem";

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <AppNavbar />
          <AddItem></AddItem>
        </div>
      </Provider>
    );
  }
}

export default App;
