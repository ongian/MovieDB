import React, { createContext, useState, useEffect } from "react";
import axios from 'axios';

export const MovieContext = createContext();

export const MovieProvider = (props) => {
    const [genre, setGenre] = useState([]);
    const getGenre = async() => {
        const genre_id = await axios('https://api.themoviedb.org/3/genre/movie/list?api_key=f785d2cd4e430f2258527567b3468db6&language=en-US')
        setGenre(genre_id.data.genres)
    }
    useEffect(() => {
        getGenre();
    }, []);
    
    return (
        <MovieContext.Provider value={genre}>
            {props.children}
        </MovieContext.Provider>
    );
}
