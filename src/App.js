import React, {useState} from 'react';
import './index.css';
import BlockContainer from './components/utilities/blockContainer/BlockContainer';
import Banner from './components/banner/Banner';
import Category from './components/category/Category';
import {Switch, Route} from 'react-router-dom';
import NewMovies from './components/MovieContainer/NewMovies/NewMovies';
import Trending from './components/MovieContainer/Trending/Trending';
import SearchResult from './components/MovieContainer/SearchResult/SearchResult';
import PageNotFound from './components/utilities/PageNotFound/PageNotFound';
const App = () => {
  const [search, setSearch] = useState('')
  const getSearch = (query) => {
    setSearch(query)
  }
  console.log(search)
  return (
    <React.Fragment>
      <Banner />
      <BlockContainer>
        <Category getSearch={getSearch}/>
        <Switch>
          <Route path="/trending">
            <Trending />
          </Route>
          <Route path="/search">
            <SearchResult />
          </Route>
          <Route exact={true} path="/">
            <NewMovies />
          </Route>
          <Route path="/*">
            <PageNotFound />
          </Route>
        </Switch>
      </BlockContainer>
    </React.Fragment>
  )
  
}

export default App;
