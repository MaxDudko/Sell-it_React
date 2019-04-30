import React, { Component } from 'react';
import LoginPage from './components/LoginPage';

class LoginPageContainer extends Component {
     
    handleClick = () => {
        this.setState({
          isLogin: !this.state.isLogin
        });
    }

    //change={this.handleClick}
    
    render() {
        return (
            <LoginPage />
        )
    }
}


export default LoginPageContainer;