import React, {useState, useEffect} from 'react';
import './index.css';
import Header from './components/header/Header';
import MovieCard from './components/movieCard/MovieCard';
import BlockContainer from './components/utilities/blockContainer/BlockContainer';
import Banner from './components/banner/Banner';
import Loader from './components/utilities/loader/Loader.js';
import Category from './components/category/Category';


const App = () => {
  const [movieState, setMovieState] = useState([]);
  // const [error, setError] = useState(false);
  useEffect(() => {
    getMoviesArray();
  }, []);
  
  let movieDisplay = <Loader />;
  const getMoviesArray = () => {
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=f785d2cd4e430f2258527567b3468db6&language=all&sort_by=release_date.desc&include_adult=false&include_video=true')
    .then(data => data.json())
    .then((data) => setMovieState(data.results))
    .catch(err => {
      console.log(err)
    })
  }
  console.log(movieState)

  if(movieState){
    let today = Date.now();
    movieDisplay = movieState.filter(relDate => new Date(relDate.release_date).getTime() > today && relDate.poster_path !== null)
    .map((movie) => (
      <MovieCard 
        key={movie.id} 
        img={movie.poster_path} 
        orig_title={movie.original_title}
        title={movie.title}
        rating={movie.vote_average}
        genre={movie.genre_ids}
        release_date={movie.release_date}
      />
    ))
  }
  // if(!error){
  //   let today = Date.now();
  //   movieDisplay = movieState.filter(relDate => new Date(relDate.release_date).getTime() > today)
  //   .map((movie) => (
  //     <MovieCard 
  //       key={movie.id} 
  //       img={movie.poster_path} 
  //       orig_title={movie.original_title}
  //       title={movie.title}
  //       rating={movie.vote_average}
  //       genre={movie.genre_ids}
  //       release_date={new Date(movie.release_date).getTime()}
  //     />
  //   ))
  //   console.log(today)
  // } else {
  //   movieDisplay = <p>Failed to load. . .</p>
  // }
  
  return (
    <React.Fragment>
      <Header />
      <Banner />
      <BlockContainer>
        <Category />
        {movieDisplay}
      </BlockContainer>
    </React.Fragment>
  )
  
}

export default App;
