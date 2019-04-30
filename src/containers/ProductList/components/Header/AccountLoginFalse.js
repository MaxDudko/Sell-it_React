import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';


const AccountLoginFalse = (props) => (
    <div className={styles.header__account}>
        Welcome, <Link to="/LoginPage">Login</Link> or <Link to="/LoginPage">Register</Link> for Start!
    </div>
)

export default AccountLoginFalse;