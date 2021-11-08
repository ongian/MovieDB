import React from "react";
import style from './MovieDetails.module.css';

const MovieDetails = (props) => {
    const propsGenre = props.genre ? props.genre : [];
    const circleRatings = <div className={style.ratings} style={{background: `conic-gradient(rgb(241, 196, 15) ${props.ratings * 10}%, transparent 0 100%)`}}><span>{props.ratings}</span></div>;
    const genreMap = propsGenre.map((gen, index) => <span key={index}>{gen.name}{index < propsGenre.length - 1 ? ',  ' : ''} </span>)
    return (<div className={style['movie-details']}>
        <h1>{props.title} - <span> {props.language} </span></h1>
            {props ? <p className={style.genre}>{genreMap}</p>: null}
        <p className="summary">{props.summary}</p>
        {props.ratings === 0 ? <p>No Ratings Yet.</p> : circleRatings}
    </div>);
}
 
export default MovieDetails;