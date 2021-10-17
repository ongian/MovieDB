import React, {useEffect, useState} from 'react';
import MovieCard from '../../movieCard/MovieCard';
import Loader from '../../utilities/loader/Loader.js';
import style from './Trending.module.css';
import axios from 'axios';
import { useLocation } from 'react-router';
import Pagination from '../../utilities/Pagination/Pagination';
const Trending = (props) => {
    const [movieList, setMovieList] = useState([]);
    const [loading, setLoading] = useState(true)
    const loc = useLocation();
    const pageParam = new URLSearchParams(loc.search);
    const curPageParam = pageParam.get('page') ? pageParam.get('page') : 1;
    useEffect(() => {
        const movies = async() => {
            setLoading(true)
            const results = await axios(`https://api.themoviedb.org/3/trending/movie/week?api_key=f785d2cd4e430f2258527567b3468db6&page=${curPageParam}`);
            setMovieList(results.data)
            setLoading(false)
        }
        movies();
        const bannerHeight = document.querySelector('.container').offsetTop;
        setTimeout(window.scrollTo({top: bannerHeight, left: 0, behavior: 'smooth' }), 1000)
    }, [curPageParam]);
    
    const moviesArr = movieList.results === undefined ? [] : movieList.results;
    const movieDisplay = moviesArr.filter(relDate => relDate.poster_path !== null)
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
    
    const moviesFound = movieList.total_results;
    let moviesResult = <p>No Movies Found</p>;
    if(moviesFound === 1){
        moviesResult = <p>1 Result Found</p>
    }
    if(moviesFound > 1){
        moviesResult = <p>{moviesFound} Results Found</p>
    }
    // const getCurrentPage = (page) => {
    //     setCurrentPage(page)
    // }
    return(
        <div className={style['new-movies']}>
            <div className={style.result}>{moviesResult} </div>
            {loading ? <Loader /> : <React.Fragment>{movieDisplay} {movieList.total_pages > 1 && <Pagination pageCount={movieList.total_pages} activePage={movieList.page} />}</React.Fragment>}
        </div>
    )
}

export default Trending;