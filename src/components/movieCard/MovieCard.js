import React from 'react';
import style from './MovieCard.module.css';
const MovieCard = (props) => {
    return (
        <div className={style['movie-card']}>
            <div className={style['movie-cover']}>
                <img src={`https://image.tmdb.org/t/p/w200/${props.img}`} alt={props.orig_title} />
                <div className={style['ratings-and-genre']}>
                    {props.genre.map(gen => <p className={style.genre} key={gen}>{gen}</p>)}
                    <span className={style.rating}>{props.rating}</span>
                </div>
            </div>
            <h3>{props.title}</h3>
        </div>
    )
}

export default MovieCard;