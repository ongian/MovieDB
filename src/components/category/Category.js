import React from 'react';
import style from './Category.module.css';

const Category = () => {
    return (
        <div className={style.category}>
            <div className={style.category_button}>
                <button>Upcoming Movie</button>
                <button>What's New?</button>
                <button>Trending</button>
                <button>See All</button>
            </div>
            <form>
                <input type="search" />
            </form>
        </div>
    )
}

export default Category