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
      <Route path={['/trending', '/search', '/']} exact={true}>
        <Category getSearch={getSearch}/>
      </Route>
        <Switch>
          <Route path="/trending">
            <BlockContainer>
              <Trending />
            </BlockContainer>
          </Route>
          <Route path="/search">
            <BlockContainer>
              <SearchResult />
            </BlockContainer>
          </Route>
          <Route exact={true} path="/">
            <BlockContainer>
              <NewMovies />
            </BlockContainer>
          </Route>
          <Route exact={true} path="/movie/:movieId">
            <Preview />
          </Route>
          <Route path="/*">
            <BlockContainer>
              <PageNotFound />
            </BlockContainer>
          </Route>
        </Switch>
      
    </React.Fragment>
  )
  
}

export default App;
