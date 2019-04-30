import React from 'react';
import { Link } from 'react-router-dom';
import userPhoto from '../../../../images/user_Kim-Evans.jpg';
import signOut from '../../../../images/sign-out.png';
import styles from './Header.module.scss';


const AccountLoginTrue = (props) => (
    <div className={styles.header__account}>
        <div className={styles.account__user}>
            <img className={styles.account__userImg} src={userPhoto} alt="Kim Evans" />
            <div className={styles.account__userName}>Kim Evans</div>
        </div>
        <div className={styles.account__signOut}>
            <Link to="/LoginPage"><img src={signOut} alt="sign out" onClick={props.change} /></Link>
        </div>
    </div>
)

export default AccountLoginTrue;