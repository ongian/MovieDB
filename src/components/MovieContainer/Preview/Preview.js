import React, {useState, useEffect} from 'react';
import Poster from './Poster/Poster';
import MovieDetails from './MovieDetails/MovieDetails';
import BlockContainer from '../../utilities/blockContainer/BlockContainer';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import style from './Preview.module.css';
import Trailer from './Trailer/Trailer';
import MovieBG from './MovieBG/MovieBG';
import TrailerNav from '../../utilities/TrailerNav/TrailerNav';

const Preview = (props) => {
    const params = useParams();
    const [movieDetails, setMovieDetails] = useState([]);
    const [movieBG, setMovieBG] = useState([]);
    // const [containerHeight, setContainerHeight] = useState(0);
    // const cont = React.createRef();
    //const {height} = useContainerDimensions(cont);
    useEffect(() => {
        const getMovieDetails = async() => {
            try {
                const response = await axios(`https://api.themoviedb.org/3/movie/${params.movieId}?api_key=f785d2cd4e430f2258527567b3468db6`);
                const bg = await axios(`https://api.themoviedb.org/3/movie/${params.movieId}/images?api_key=f785d2cd4e430f2258527567b3468db6`);
                setMovieDetails(response.data);
                setMovieBG(bg.data.backdrops)
            } catch(error) {
                console.log(true)
            }
        }
        getMovieDetails();
        // if(!cont){
        //     setContainerHeight(0)
        // } else {
        //     setContainerHeight(cont.current.getBoundingClientRect().height)
        // }
    }, [params, props])

    //console.log(containerHeight)
    const movieBackground = movieBG.length ? <MovieBG movieBG={movieBG} /> : null;

    const heroBannerClasses = movieBG.length ? ['hero-banner', 'with-backdrop']:['hero-banner'];

    console.log(heroBannerClasses.map(css => style[css]).join(','))
    return (
        <React.Fragment>
        <div className={`${style['hero-banner']} ${movieBG.length ? style['with-backdrop']: ''}`} >
            {movieBackground}
            <BlockContainer className={style['trailer-nav']}>
                <TrailerNav />
            </BlockContainer>
            <BlockContainer className={style.container}>
                <Poster poster={movieDetails.backdrop_path} title={movieDetails.title} />
                <MovieDetails 
                    genre={movieDetails.genres} 
                    title={movieDetails.title} 
                    summary={movieDetails.overview}
                    language={movieDetails.original_language} 
                    ratings={movieDetails.vote_average} />
                <Trailer />
            </BlockContainer>
        </div>
        
        </React.Fragment>
    );
}
 
export default Preview;