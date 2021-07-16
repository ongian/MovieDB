import React, {useEffect, useState} from 'react';
import MovieCard from '../movieCard/MovieCard.js';
import Loader from '../utilities/loader/Loader.js';
import style from './UpcomingMovie.module.css';
import axios from 'axios';
const UpcomingMovie = (props) => {
    const [movieList, setMovieList] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const movies = async() => {
            setLoading(true)
            const results = await axios('https://api.themoviedb.org/3/discover/movie?api_key=f785d2cd4e430f2258527567b3468db6&language=all&sort_by=release_date.desc&include_adult=false&include_video=true');
            setMovieList(results.data.results)
            setLoading(false)
        }
        movies();

        // const movieGenres = async() => {
        //     const genres = await axios('https://api.themoviedb.org/3/genre/movie/list?api_key=f785d2cd4e430f2258527567b3468db6&language=en-US');
        //     setGenre(genres.data)
        // }
        // movieGenres()
    }, []);
    console.log(movieList)
    //const genArrays = (arr) => genre.genres.filter(genrs => this.indexOf(genrs.id) > 0, arr);
    const movieDisplay = movieList.filter(relDate => new Date(relDate.release_date).getTime() > Date.now() && relDate.poster_path !== null)
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
    //const genreName = props.genre.map(propsGen => genre.findIndex(gen => gen.id === propsGen));
    
    return(
        <div className={style.upcoming}>
            {loading ? <Loader />: movieDisplay}
        </div>
    )
}

export default UpcomingMovie;