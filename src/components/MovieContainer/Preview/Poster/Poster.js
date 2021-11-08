import React from 'react';
import style from './Poster.module.css';
import noImage from '../../../../images/NoImage.jpg';
const Poster = (props) => {
    return (<div className={style['movie-poster']}>
        <img src={props.poster === null ? noImage : `https://image.tmdb.org/t/p/w500${props.poster}`} alt={props.title} />
    </div>);
}
 
export default Poster;