import React, {useState, useEffect} from 'react';
import './index.css';
import Header from './components/header/Header';
import BlockContainer from './components/utilities/blockContainer/BlockContainer';
import Banner from './components/banner/Banner';

import Loader from './components/utilities/loader/Loader';
import MovieCard from './components/movieCard/MovieCard';
import axios from 'axios';

import Category from './components/category/Category';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSadTear } from '@fortawesome/free-solid-svg-icons';

const App = () => {
  const [category, setCategory] = useState('movie/now_playing');
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');
  const [error, setError] = useState(false);
  useEffect(() => {
    // const movies = async() => {
    //     setLoading(true)
    //     let results = await axios(`https://api.themoviedb.org/3/${category}?api_key=f785d2cd4e430f2258527567b3468db6&language=en-US&page=1`);
    //     setMovieList(results.data.results)
    //     setLoading(false)
    // }
    // movies();
    const APILINK = `https://api.themoviedb.org/3/${category}?api_key=f785d2cd4e430f2258527567b3468db6&language=en-US&page=1`;
    const QUERYLINK = `
    https://api.themoviedb.org/3/search/movie?api_key=f785d2cd4e430f2258527567b3468db6&language=en-US&query=${query}&page=1`;
    axios.get(query.trim() === '' ? APILINK : QUERYLINK)
    .then((data) => {
      setLoading(true);
      setMovieList(data.data.results);
      setLoading(false)
    })
    .catch(err => {
      setError(err.message);
      setLoading(false)
    })
    console.log(APILINK)
  }, [category, query]);

  
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



  const getQuery = (event) => {
    setQuery(event)
  }
  const getCategory = (cat) => {
    setQuery('');
    setCategory(cat)
  }
  const ErrorFA = <FontAwesomeIcon icon={faSadTear} />;
  const ErrorMessage = <div className="error-container"><p className="error"><span>Sorry we can't get your request: <br /></span>{error}</p> {ErrorFA}</div>;
  const NoResult = <div className="error-container"><p className="error"><span>Sorry we can't get your request: <br /></span>No result found</p> {ErrorFA}</div>;
  return (
    <React.Fragment>
      <Header />
      <Banner />
      <BlockContainer>
        {/* <Category getCategory={getCategory} getQuery={getQuery} />
        {category === 'new' && <NewMovies />}
        {category === 'trending' && <Trending />}
        {category === 'upcoming' && <UpcomingMovie />} */}
        <Category onClick={getCategory} getQuery={getQuery} queries={query} />
        {loading ? <Loader /> : movieDisplay}
        {error && ErrorMessage}
        {movieList.length <= 0 && NoResult}
      </BlockContainer>
    </React.Fragment>
  )
  
}

export default App;
