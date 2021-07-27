import React from 'react';
import style from './Category.module.css';
import Search from '../utilities/Search/Search';

const Category = (props) => {
    return (
        <div className={style.category}>
            <div className={style.category_button}>
                <button onClick={() => props.getCategory('new')}>What's New?</button>
                <button onClick={() => props.getCategory('trending')}>Trending</button>
                <button onClick={() => props.getCategory('upcoming')}>Upcoming Movie</button>
            </div>
            <Search getQuery={props.getQuery} />
        </div>
    )
}

export default Category