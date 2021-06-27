import React from 'react';
import styles from './Header.module.css';

const Header = () => {
    return <header>
        <div className={styles.container}>
            <h1>
                Movie Database
            </h1>
            <div>
                <form>
                    <input type="text" placeholder="Search Movie" /> 
                </form>
            </div>
        </div>
    </header>
}

export default Header;