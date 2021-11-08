import React, {useState} from 'react';
import './index.css';
import BlockContainer from './components/utilities/blockContainer/BlockContainer';
import Banner from './components/banner/Banner';
import Category from './components/category/Category';
import {Switch, Route} from 'react-router-dom';
import NewMovies from './components/MovieContainer/NewMovies/NewMovies';
import Trending from './components/MovieContainer/Trending/Trending';
import SearchResult from './components/MovieContainer/SearchResult/SearchResult';
import Preview from './components/MovieContainer/Preview/Preview';
import PageNotFound from './components/utilities/PageNotFound/PageNotFound';
const App = () => {
  const [search, setSearch] = useState('');
  const getSearch = (query) => {
    setSearch(query)
  }

 
  return (
    <React.Fragment>
      <Route path={['/trending', '/search', '/']} exact={true}>
        <Banner />
      </Route>
      <BlockContainer>
        <Route path={['/trending', '/search', '/']} exact={true}>
          <Category getSearch={getSearch}/>
        </Route>
        
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
          <Route exact={true} path="/movie/:movieId">
            <Preview />
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
