import React, { Component } from 'react';
import './Header.scss';
import logo from '../images/logo-2.png';
import search from '../images/search.png';
import userPhoto from '../images/user_Kim-Evans.jpg';
import signOut from '../images/sign-out.png';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="header__logo">
                    <a href="/"><img src={logo} alt="Sell it" /></a>
                </div>
                <div className="header__search">
                    <img className="search__img" src={search} alt="Search" />
                    <input className="search__input" type="search" placeholder="Try find somethink!" />
                </div>
                <div className="header__account">
                    <div className="account__user">
                        <img className="account__user-img" src={userPhoto} alt="Kim Evans" />
                        <div className="account__user-name">Kim Evans</div>
                    </div>
                    <div className="account__sign-out">
                        <a href="/"><img src={signOut} alt="sign out" /></a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;
