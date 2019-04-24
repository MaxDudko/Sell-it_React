import React, { Component } from 'react';
import './App.scss';

import Header from './components/Header';
import Footer from './components/Footer';
import LoginPage from './components/LoginPage';
import ProductList from './components/ProductList';


class App extends Component {
    constructor() {
        super();
        this.state = {
          isLogin: false
        }
    }

    handleClick = () => {
        this.setState({
          isLogin: !this.state.isLogin
        });
    }

    render() {
        const content = this.state.isLogin ? <ProductList change={this.handleClick} /> : <LoginPage change={this.handleClick} />

        return (
            <div className="App">
                <Header />
                <div className="content">
                    { content }
                </div>
                <Footer />
            </div>
        );
     }
}

export default App;
