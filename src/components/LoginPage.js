import React from 'react';
import { Link } from 'react-router-dom';
import styles from './LoginPage.module.scss';
import logo from '../images/logo-1.png';

const LoginPage = (props) => (
            <div className={styles.loginPage}>
                <div className={styles.loginPage__leftSection}>
                </div>
                <div className={styles.loginPage__rightSection}>
                    <img className={styles.rightSection__logo} src={logo} alt="Sell it" />
                    <div className={styles.rightSection__loginForm}>
                        <div className={styles.loginForm__signButton}>
                            <button className={styles.signButton__btn}>Sign In</button>
                            <button className={styles.signButton__btn}>Sign Up</button>
                        </div>
                        <div className={styles.loginForm__loginField}>
                            <input className={styles.loginField__input} type="email" placeholder="Email" />
                            <input className={styles.loginField__input} type="password" placeholder="Password" />
                            <Link to="/"><button className={styles.loginField__btn} onClick={props.change}>Login</button></Link>
                        </div>
                    </div>  
                </div>
            </div>
        )
    

export default LoginPage;