import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header';
import Product from './components/Product';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header/>
        <Product/>
      </div>
    );
  }
}

export default App;
