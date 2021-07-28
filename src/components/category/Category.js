import React from 'react';
import style from './Category.module.css';
import Search from '../utilities/Search/Search';

const Category = (props) => {
    return (
        <div className={style.category}>
            <div className={style.category_button}>
                <button onClick={() => props.onClick('movie/now_playing')}>What's New?</button>
                <button onClick={() => props.onClick('trending/movie/week')}>Trending</button>
                <button onClick={() => props.onClick('movie/upcoming')}>Upcoming Movie</button>
            </div>
            <Search getQuery={props.getQuery} />
        </div>
    )
}

export default Category