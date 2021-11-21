import React, {useState} from 'react';
import style from './MovieBG.module.css';
import { useInterval } from '../../../../hooks/useInterval';

const MovieBG = (props) => {
    const [bgCounter, setBGCounter] = useState(0);

    useInterval(() => {
        if(props.movieBG.length - 1 > bgCounter){
            setBGCounter((bgC) => bgC+1)
        } else {
            setBGCounter(0)
        }
    }, 5000)
    const trailerBackDrop = props.movieBG.length ? 'https://image.tmdb.org/t/p/original'+ props.movieBG[bgCounter].file_path : null;
    

    const filteredBGStyles = {
        backgroundImage: "url(" + trailerBackDrop + ")",
        backgroundSize: 'cover',
        minHeight: '100vh',
        width: '100%',
        backgroundPosition: 'top center',
        position: 'fixed',
        transition: 'background-image 2.5s',
        top: 0,
        bottom: 0,
    }
    const filteredBG = trailerBackDrop ? <div style={ filteredBGStyles }><div className={style['hero-backdrop']}></div></div> : null;
    
    return ( <>
        {filteredBG}
    </>);
}
 
export default MovieBG;