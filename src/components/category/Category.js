import React from 'react';
import style from './Category.module.css';

const Category = (props) => {
    return (
        <div className={style.category}>
            <div className={style.category_button}>
                <button onClick={() => props.getCategory('upcoming')}>Upcoming Movie</button>
                <button onClick={() => props.getCategory('new')}>What's New?</button>
                <button onClick={() => props.getCategory('trending')}>Trending</button>
            </div>
            <form>
                <input type="search" />
            </form>
        </div>
    )
}

export default Category