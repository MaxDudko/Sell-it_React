import React from 'react';
import styles from './Header.module.scss';
import logo from '../../../../images/logo-2.png';
import search from '../../../../images/search.png';
import AccountLoginTrue from './AccountLoginTrue';
import AccountLoginFalse from './AccountLoginFalse';

const Header = (props) => (
            <div className={styles.header}>
                <div className={styles.header__logo}>
                    <a href="/"><img src={logo} alt="Sell it" /></a>
                </div>
                <div className={styles.header__search}>
                    <img className={styles.search__img} src={search} alt="Search" />
                    <input className={styles.search__input} type="search" placeholder="Try find somethink!" />
                </div>
                { props.isLogin ? <AccountLoginTrue /> : <AccountLoginFalse /> }
            </div>
)

export default Header;
