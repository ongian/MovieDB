import React from 'react';
import style from './Banner.module.css';

const Banner = () => (
    <div className={style.banner}>
        <div className={style.container}>
            <h2>Movie Database <span>Portfolio</span></h2>
            <p>This is just a mini project using ReactJS.</p>
        </div>
    </div>
)

export default Banner;