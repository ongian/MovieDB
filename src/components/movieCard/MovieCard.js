import React, {useContext} from 'react';
import style from './MovieCard.module.css';
import { MovieContext } from '../../Context/MovieContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import nullImage from '../../images/image-not-found.png';
import { useHistory } from 'react-router';
const MovieCard = (props) => {
    const ctxGenre = useContext(MovieContext);
    const history = useHistory();
    const eachGenre = ctxGenre.filter(ctxGen => {
        return props.genre.some(propsGen => {
            return ctxGen.id === propsGen
        })
    })
    const star = <FontAwesomeIcon icon={faStar} />;
    const genreDisplay = <div className={style.genre}>
            {eachGenre.map((gen, index) => <span className={style.genre} key={gen + index}>{gen.name}{index < eachGenre.length - 1 ? ',  ' : ''} </span>)}
        </div>;
    const clickMovieCard = () => {
        history.push(`/movie/${props.movieID}`)
    }
    return (
        <div className={style['movie-card']} onClick={clickMovieCard}>
            <div className={style['movie-cover']}>
                <img src={props.img === null ? nullImage : `https://image.tmdb.org/t/p/w300/${props.img}`} alt={props.orig_title} />
                <div className={style['ratings-and-summary']}>
                    <p className={style.summary}>{props.summary}</p>
                    {props.rating ? <span className={style.rating}>{star} {props.rating}</span>: <span className={style['no-ratings']}>No ratings yet</span>}
                </div>
            </div>
            <div className={style['title-container']}>
            <h3>{props.title}</h3>
                {props.release_date && <p className={style['release-date']}>Release date: {new Date(props.release_date).toLocaleString('en-US', {month: 'long', day: '2-digit', year: 'numeric'})}</p>}
                {props.genre.length && genreDisplay}
            </div>
        </div>
    )
}

export default MovieCard;