import React from 'react';
import style from './Category.module.css';
import Search from '../utilities/Search/Search';
import {NavLink} from 'react-router-dom';
const Category = (props) => {
    return (
        <div className={style.category}>
            <div className={style.category_button}>
                <NavLink className={style.link} to="/" exact activeClassName={style.active}>Now Playing</NavLink>
                <NavLink className={style.link} to="/trending" activeClassName={style.active}>Trending This Week</NavLink>
            </div>
            <Search getSearch={props.getSearch} queries={props.queries}/>
        </div>
    )
}

export default Category