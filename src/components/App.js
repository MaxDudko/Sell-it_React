import React, { Component } from 'react';
import './App.scss';

import Header from './Header';
import Footer from './Footer';
import LoginPage from './LoginPage';
import ProductList from './ProductList';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="content">
            <ProductList />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
