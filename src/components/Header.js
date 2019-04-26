import React from 'react';
import styles from './Header.module.scss';
import logo from '../images/logo-2.png';
import search from '../images/search.png';
import userPhoto from '../images/user_Kim-Evans.jpg';
import signOut from '../images/sign-out.png';

const Header = (props) => (
            <div className={styles.header}>
                <div className={styles.header__logo}>
                    <a href="/"><img src={logo} alt="Sell it" /></a>
                </div>
                <div className={styles.header__search}>
                    <img className={styles.search__img} src={search} alt="Search" />
                    <input className={styles.search__input} type="search" placeholder="Try find somethink!" />
                </div>
                { props.isLogin ?
                <div className={styles.header__account}>
                    <div className={styles.account__user}>
                        <img className={styles.account__userImg} src={userPhoto} alt="Kim Evans" />
                        <div className={styles.account__userName}>Kim Evans</div>
                    </div>
                    <div className={styles.account__signOut}>
                        <a href="/"><img src={signOut} alt="sign out" onClick={props.change} /></a>
                    </div>
                </div>
                :
                <div className={styles.header__account}>
                    <p>Welcome, <a className={styles.account__link} href="/">Login</a> or <a className={styles.account__link} href="/">Register</a> for Start!</p>
                </div>
                }
            </div>
)

export default Header;
