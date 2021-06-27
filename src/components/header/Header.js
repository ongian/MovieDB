import React from 'react';
import styles from './Header.module.css';

const Header = () => {
    return <header className={styles.header}>
        <h1>
            Movie Database
        </h1>
        <div>
            <form>
                <input type="text" placeholder="Search Movie" /> 
            </form>
        </div>
    </header>
}

export default Header;