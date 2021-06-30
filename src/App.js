import React, {useState, useEffect} from 'react';
import './index.css';
import Header from './components/header/Header';
import MovieCard from './components/movieCard/MovieCard';
import BlockContainer from './components/utilities/blockContainer/BlockContainer';

let movieDisplay = <p>Loading</p>;

const App = () => {
  const [movieState, setMovieState] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=f785d2cd4e430f2258527567b3468db6&language=en-US&page=1')
    .then(res => res.json())
    .then((movie) => {
      setMovieState(movie.results);
      console.log(movie.results)
    }).catch((err) => {
      setError(err);
    });
  }, []);

  if(!error){
    let today = Date.now();
    movieDisplay = movieState.filter(relDate => new Date(relDate.release_date).getTime() > today)
    .map((movie) => (
      <MovieCard 
        key={movie.id} 
        img={movie.poster_path} 
        orig_title={movie.original_title}
        title={movie.title}
        rating={movie.vote_average}
        genre={movie.genre_ids}
        release_date={new Date(movie.release_date).getTime()}
      />
    ))
    console.log(today)
  } else {
    movieDisplay = <p>Failed to load. . .</p>
  }
  
  return (
    <React.Fragment>
      <Header />
      <BlockContainer>
        {movieDisplay}
      </BlockContainer>
    </React.Fragment>
  )
  
}

export default App;
