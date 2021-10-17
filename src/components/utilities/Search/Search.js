import React, {useState} from 'react';
import style from './Search.module.css';
import { useHistory, useLocation } from 'react-router';

const Search = (props) => {
    const history = useHistory();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const searchQuery = searchParams.get('query') ? searchParams.get('query') : '';
    const [prevPage, setPrevPage] = useState('/');
    // const [typedQueries, setTypeQueries] = useState('');
    // const [asyncQuery, setAsyncQuery] = useState('');
    // useEffect(() => {
    //     const searchURL = setTimeout(() => setAsyncQuery(typedQueries), 2000);
    //     return () => clearTimeout(searchURL);
    // }, [typedQueries])
    const getQuery = (event) => {
        history.replace(`/search?query=${event.target.value}`);
        event.preventDefault();
        if(event.target.value === ''){
            history.replace(prevPage)
        }
    }
    const emptyInputFocusHandler = (event) => {
        if(event.target.value === '' && location.search === ''){
            setPrevPage(location.pathname)
        }
    }
    const emptyInputBlurHandler = (event) => {
        if(event.target.value === ''){
            history.replace(prevPage)
        }
    }
    const searchForm = (event) => {
        event.preventDefault();
    }
    
    return (
        <form onSubmit={searchForm}>
            <input 
                className={style.search} 
                onChange={getQuery} 
                onFocus={emptyInputFocusHandler}
                onBlur={emptyInputBlurHandler}
                value={searchQuery} 
                placeholder="Search"/>
        </form>
    )
}

export default Search;