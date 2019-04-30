import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import styles from './App.module.scss';
import LoginPageContainer from './containers/LoginPage/LoginPageContainer';
import ProductListContainer from './containers/ProductList/ProductListContainer';

class App extends Component {

    render() {
        return (
            <div className={styles.App}>
                <BrowserRouter>
                  <Switch>
                    <Route exact path="/" component={ProductListContainer} />  
                    <Route exact path="/LoginPage" component={LoginPageContainer} />
                  </Switch>
                </BrowserRouter>
            </div>            
        );
     }
}

export default App;
