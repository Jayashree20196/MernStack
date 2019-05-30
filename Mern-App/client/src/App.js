import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './Components/Navbar';
import AddItem from "./Components/AddItem";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavbar />
        <AddItem></AddItem>
      </div>
    );
  }
}

export default App;
