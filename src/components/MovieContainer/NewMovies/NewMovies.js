import React, {useEffect, useState} from 'react';
import MovieCard from '../../movieCard/MovieCard.js';
import Loader from '../../utilities/loader/Loader.js';
import style from './NewMovies.module.css';
import Pagination from '../../utilities/Pagination/Pagination';
import { useLocation } from 'react-router';
import axios from 'axios';

const NewMovies = (props) => {
    const [movieList, setMovieList] = useState([]);
    const [loading, setLoading] = useState(true);
    const loc = useLocation();
    const pageParam = new URLSearchParams(loc.search);
    const curPageParam = pageParam.get('page') ? pageParam.get('page') : 1;
    
    useEffect(() => {
        const movies = async() => {
            setLoading(true)
            try {
                const results = await axios(`https://api.themoviedb.org/3/movie/now_playing?api_key=f785d2cd4e430f2258527567b3468db6&language=en-US&page=${curPageParam}`);
                setMovieList(results.data)
                setLoading(false)
                
            } catch (error) {
                console.log(error)
                setLoading(false)
            }
        }
        movies();
        const bannerHeight = document.querySelector('.container').offsetTop;
        setTimeout(window.scrollTo({top: bannerHeight, left: 0, behavior: 'smooth' }), 1000)
    }, [curPageParam]);
    console.log('New Movie')
    
    const moviesArr = movieList.results === undefined ? [] : movieList.results;
    const movieDisplay = moviesArr.map((movie, ind) => (
    <MovieCard 
        key={movie.id}
        movieID={movie.id} 
        img={movie.poster_path} 
        orig_title={movie.original_title}
        title={movie.title}
        rating={movie.vote_average}
        genre={movie.genre_ids}
        release_date={movie.release_date}
        summary={movie.overview}
    />));
    console.log(moviesArr)
    const moviesFound = movieList.total_results;
    let moviesResult = <p>No Movies Found</p>;
    if(moviesFound === 1){
        moviesResult = <p>1 Result Found</p>
    }
    if(moviesFound > 1){
        moviesResult = <p>{moviesFound} Results Found</p>
    }

    return(
        <div className={style['new-movies']}>
            <div className={style.result}>{moviesResult} </div>
            {loading ? <Loader /> : <React.Fragment>{movieDisplay} {movieList.total_pages > 1 && <Pagination pageCount={movieList.total_pages} activePage={movieList.page} />}</React.Fragment>}
        </div>
    )
}

export default NewMovies;