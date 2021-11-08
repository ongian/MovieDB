import React, {useState, useEffect} from 'react';
import Poster from './Poster/Poster';
import MovieDetails from './MovieDetails/MovieDetails';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import style from './Preview.module.css';
import Trailer from './Trailer/Trailer';
const Preview = (props) => {
    const params = useParams();
    const [movieDetails, setMovieDetails] = useState([]);
    useEffect(() => {
        const getMovieDetails = async() => {
            try {
                const response = await axios(`https://api.themoviedb.org/3/movie/${params.movieId}?api_key=f785d2cd4e430f2258527567b3468db6`);
                setMovieDetails(response.data);
            } catch(error) {
                console.log(true)
            }
        }
        getMovieDetails();
    }, [params, props])
     
    return (
        <React.Fragment>
        <div className={style['hero-banner']}>
            <Poster poster={movieDetails.backdrop_path} title={movieDetails.title} />
            <MovieDetails 
                genre={movieDetails.genres} 
                title={movieDetails.title} 
                summary={movieDetails.overview}
                language={movieDetails.original_language} 
                ratings={movieDetails.vote_average} />
        </div>
        <Trailer />
        </React.Fragment>
    );
}
 
export default Preview;