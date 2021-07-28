import React, {useState, useEffect} from 'react';
import './index.css';
import Header from './components/header/Header';
import BlockContainer from './components/utilities/blockContainer/BlockContainer';
import Banner from './components/banner/Banner';

import Loader from './components/utilities/loader/Loader';
import MovieCard from './components/movieCard/MovieCard';
import axios from 'axios';

import Category from './components/category/Category';
// import UpcomingMovie from './components/UpcomingMovie/UpcomingMovie.js';
// import NewMovies from './components/NewMovies/NewMovies';
// import Trending from './components/Trending/Trending';

const App = () => {
  const [category, setCategory] = useState('movie/now_playing');
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(true)
    
  useEffect(() => {
    // const movies = async() => {
    //     setLoading(true)
    //     let results = await axios(`https://api.themoviedb.org/3/${category}?api_key=f785d2cd4e430f2258527567b3468db6&language=en-US&page=1`);
    //     setMovieList(results.data.results)
    //     setLoading(false)
    // }
    // movies();
    const APILINK = `https://api.themoviedb.org/3/${category}?api_key=f785d2cd4e430f2258527567b3468db6&language=en-US&page=1`;
    axios.get(APILINK)
    .then((data) => {
      setLoading(true);
      setMovieList(data.data.results);
      setLoading(false)
    })
    .catch(err => {
      console.log(err.message);
      setLoading(false)
    })
    console.log(APILINK)
  }, [category]);

  
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
    console.log(event.target.value)
  }
  

  return (
    <React.Fragment>
      <Header />
      <Banner />
      <BlockContainer>
        {/* <Category getCategory={getCategory} getQuery={getQuery} />
        {category === 'new' && <NewMovies />}
        {category === 'trending' && <Trending />}
        {category === 'upcoming' && <UpcomingMovie />} */}
        <Category onClick={(val) => setCategory(val)} getQuery={getQuery} />
        {loading ? <Loader /> : movieDisplay}
      </BlockContainer>
    </React.Fragment>
  )
  
}

export default App;
