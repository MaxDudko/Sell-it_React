import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import styles from './App.module.scss';
import LoginPage from './components/LoginPage';
import OnlineStore from './containers/OnlineStore';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isLogin: true,
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
        return (
            <div className={styles.App}>
                <BrowserRouter>
                  <Switch>
                    <Route exact path="/" component={OnlineStore} change={this.handleClick}/>  
                    <Route exact path="/LoginPage" component={LoginPage} />
                  </Switch>
                </BrowserRouter>
            </div>            
        );
     }
}

export default App;
