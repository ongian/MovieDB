import React, {useEffect, useState} from 'react';
import MovieCard from '../../movieCard/MovieCard';
import Loader from '../../utilities/loader/Loader';
import { useLocation, Redirect } from 'react-router';
import axios from 'axios';
// import { useParams } from 'react-router';
const SearchResult = (props) => {
    const [loading, setLoading] = useState(true);
    const [movieList, setMovieList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const loc = useLocation();

    const searchParam = new URLSearchParams(loc.search);
    const searchQuery = searchParam.get('query');

    useEffect(() => {
        const movies = async() => {
            setLoading(true)
            const results = await axios(`https://api.themoviedb.org/3/search/movie?api_key=f785d2cd4e430f2258527567b3468db6&language=en-US&query=${searchQuery}&page=${currentPage}`);
            setMovieList(results.data.results)
            setLoading(false)
        }
        movies();
    }, [props.search, currentPage, searchQuery]);

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

    return (
        <React.Fragment>
            {loading ? <Loader /> : movieDisplay}
            {searchQuery === '' && <Redirect to="/" />}
        </React.Fragment>
        
    )
}

export default SearchResult;