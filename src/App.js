import React, {useState, useEffect} from 'react';
import './index.css';
import Header from './components/header/Header';


const App = () => {
  const [movieState, setMovieState] = useState({});
  useEffect(() => {
    fetchMovie();
  }, [])
  const fetchMovie = async() => {
    const movieResponse = await fetch('https://api.themoviedb.org/3/movie/2/lists?api_key=f785d2cd4e430f2258527567b3468db6&language=en-US&page=1');
    const moviesJson = await movieResponse.json();
    setMovieState(moviesJson);
  }
  console.log(movieState)
  return (
    <React.Fragment>
      <Header />
      <div>Hello World!</div>
    </React.Fragment>
  )
  
}

export default App;
