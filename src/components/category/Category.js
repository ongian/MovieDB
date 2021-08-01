import React from 'react';
import style from './Category.module.css';
import Search from '../utilities/Search/Search';

const Category = (props) => {
    return (
        <div className={style.category}>
            <div className={style.category_button}>
                <button onClick={() => props.onClick('movie/now_playing')}>Now Playing</button>
                <button onClick={() => props.onClick('trending/movie/week')}>Trending This Week</button>
                <button onClick={() => props.onClick('discover/movie')}>Discover Movie</button>
            </div>
            <Search getQuery={props.getQuery} queries={props.queries}/>
        </div>
    )
}

export default Category