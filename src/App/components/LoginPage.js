import React, { Component } from 'react';
import './LoginPage.scss';
import logo from '../../images/logo-1.png';

class LoginPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            is: false
        }
    }


    render() {
        return (
            <div className="login-page">
                <div className="login-page__left-section">
                </div>
                <div className="login-page__right-section">
                    <img className="right-section__logo" src={logo} alt="Sell it" />
                    <div className="right-section__login-form">
                        <div className="login-form__sign-button">
                            <button className="sign-button__btn">Sign In</button>
                            <button className="sign-button__btn">Sign Up</button>
                        </div>
                        <div className="login-form__login-field">
                            <input className="login-field__input" type="email" placeholder="Email" />
                            <input className="login-field__input" type="password" placeholder="Password" />
                            <button className="login-field__btn" onClick={this.props.change}>Login</button>
                        </div>
                    </div>  
                </div>
            </div>
        )
    }
}

export default LoginPage;