import React, {useEffect, useState} from 'react';
import MovieCard from '../../movieCard/MovieCard';
import Loader from '../../utilities/loader/Loader';
import { useLocation, Redirect } from 'react-router';
import Pagination from '../../utilities/Pagination/Pagination';
import axios from 'axios';
import style from './SearchResult.module.css';

// import { useParams } from 'react-router';
const SearchResult = (props) => {
    const [loading, setLoading] = useState(true);
    const [movieList, setMovieList] = useState([]);
    //const [currentPage, setCurrentPage] = useState(1);
    const loc = useLocation();

    const searchParam = new URLSearchParams(loc.search);
    const searchQuery = searchParam.get('query');
    const searchPage = searchParam.get('page') ? `&page=${searchParam.get('page')}` : '';
    useEffect(() => {
        const movies = async() => {
            setLoading(true);
            try {
                const results = await axios(`https://api.themoviedb.org/3/search/movie?api_key=f785d2cd4e430f2258527567b3468db6&language=en-US&query=${searchQuery}${searchPage}`);
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
    }, [searchQuery, searchPage]);

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
    return (
        <React.Fragment>
            {searchQuery === '' && <Redirect to="/" />}
            <div className={style.result}>{moviesResult} </div>
            {loading ? <Loader /> : <React.Fragment>{movieDisplay} {movieList.total_pages > 1 && <Pagination pageCount={movieList.total_pages} activePage={movieList.page} />}</React.Fragment>}
        </React.Fragment>
        
    )
}

export default SearchResult;