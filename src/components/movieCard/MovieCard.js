import React, {useContext} from 'react';
import style from './MovieCard.module.css';
import { MovieContext } from '../../Context/MovieContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MovieCard = (props) => {
    const ctxGenre = useContext(MovieContext);

    const eachGenre = ctxGenre.filter(ctxGen => {
        return props.genre.some(propsGen => {
            return ctxGen.id === propsGen
        })
    })
    const genreDisplay = <div className={style.genre}>
            {eachGenre.map((gen, index) => <span className={style.genre} key={gen + index}>{gen.name}{index < eachGenre.length - 1 ? ',  ' : ''} </span>)}
        </div>;
    return (
        <div className={style['movie-card']}>
            <div className={style['movie-cover']}>
                <img src={`https://image.tmdb.org/t/p/w300/${props.img}`} alt={props.orig_title} />
                <div className={style['ratings-and-summary']}>
                    <p className={style.summary}>{props.summary}</p>
                    <span className={style.rating}>{props.rating ? `<FontAwesomeIcon icon="fa-solid fa-star" />  props.rating` : 'No ratings yet'}</span>
                </div>
            </div>
            <div className={style['title-container']}>
            <h3>{props.title}</h3>
                {props.genre.length ? genreDisplay : null}
                {props.release_date ? <p className={style['release-date']}>Release date: {new Date(props.release_date).toLocaleString('en-US', {month: 'long', day: '2-digit', year: 'numeric'})}</p>: null}
            </div>
        </div>
    )
}

export default MovieCard;