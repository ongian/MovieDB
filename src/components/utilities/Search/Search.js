import React, {useState} from 'react';

const Search = () => {
    const [query, setQuery] = useState('');

    const getQuery = (event) => {
        setQuery(event.target.value)
        console.log(event.target.value)
    }
    return (
        <form>
            <input onChange={getQuery} />
        </form>
    )
}

export default Search;