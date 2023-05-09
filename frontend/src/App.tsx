import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar";
import Register from "./components/Register";
function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <Register />
      </div>      
    </div>
  );
}

export default App;
