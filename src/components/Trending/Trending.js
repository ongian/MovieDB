import React, {useEffect, useState} from 'react';
import MovieCard from '../movieCard/MovieCard.js';
import Loader from '../utilities/loader/Loader.js';
import style from './Trending.module.css';
import axios from 'axios';
const Trending = (props) => {
    const [movieList, setMovieList] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const movies = async() => {
            setLoading(true)
            const results = await axios('https://api.themoviedb.org/3/trending/movie/week?api_key=f785d2cd4e430f2258527567b3468db6');
            setMovieList(results.data.results)
            setLoading(false)
        }
        movies();


    }, []);
    console.log(movieList)

    const movieDisplay = movieList.filter(relDate => relDate.poster_path !== null)
    .map((movie, ind) => (
    <MovieCard 
        key={movie.id} 
        img={movie.poster_path} 
        orig_title={movie.original_title}
        title={movie.title}
        rating={movie.vote_average}
        genre={movie.genre_ids}
        release_date={movie.release_date}
        summary={movie.overview}
    />));
    
    return(
        <div className={style['new-movies']}>
            {loading ? <Loader />: movieDisplay}
        </div>
    )
}

export default Trending;