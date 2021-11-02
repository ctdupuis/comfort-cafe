import React from 'react';
import './App.css';
import Header from './components/static/Header';
import Nav from './components/static/Nav';
import Home from './components/static/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <div className="wrapper">
        <Home />
      </div>
    </div>
  );
}

export default App;
