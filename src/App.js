import React, {useState, useEffect} from 'react';
import './index.css';
import Header from './components/header/Header';


let movieDisplay = <p>Loading</p>;

const App = () => {
  const [movieState, setMovieState] = useState([]);
  // const [errorLoading, setErrorLoading] = useState(false);
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
    movieDisplay = movieState.map((movie) => (
      <div className="movie-card" key={movie.poster_path}>
        <img src={'https://image.tmdb.org/t/p/w200/' + movie.poster_path} alt={movie.original_title} />
        <h2>{movie.title}</h2>
      </div>
    )
  )
  }
  
  return (
    <React.Fragment>
      <Header />
      <div>
        {movieDisplay}
      </div>
    </React.Fragment>
  )
  
}

export default App;
