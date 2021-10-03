import React from 'react';
import style from './Search.module.css';
const Search = (props) => {

    const getQuery = (event) => {
        props.getQuery(event.target.value)
    }
    return (
        <form>
            <input className={style.search} onChange={getQuery} value={props.queries} placeholder="Search"/>
        </form>
    )
}

export default Search;