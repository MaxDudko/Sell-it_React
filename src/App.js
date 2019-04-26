import React, { Component } from 'react';
import styles from './App.module.scss';

import Header from './components/Header';
import Footer from './components/Footer';
import LoginPage from './components/LoginPage';
import ProductList from './components/ProductList';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isLogin: false,
          error: null,
          isLoaded: false,
          items: []
        }
    }

    componentDidMount() {
        fetch("http://light-it-04.tk/api/posters/")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                items: result.items
              });
            },

            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )      
    }

    handleClick = () => {
        this.setState({
          isLogin: !this.state.isLogin
        });
    }

    render() {
        const content = this.state.isLogin ? <ProductList change={this.handleClick} /> : <LoginPage change={this.handleClick} />

        return (
            <div className={styles.App}>
                <Header isLogin = {this.state.isLogin} />
                <div className={styles.content}>
                    { content }
                </div>
                <Footer />
            </div>            
        );
     }
}

export default App;
