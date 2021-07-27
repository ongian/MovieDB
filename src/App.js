import React, {useState} from 'react';
import './index.css';
import Header from './components/header/Header';
import BlockContainer from './components/utilities/blockContainer/BlockContainer';
import Banner from './components/banner/Banner';
import Category from './components/category/Category';
import UpcomingMovie from './components/UpcomingMovie/UpcomingMovie.js';
import NewMovies from './components/NewMovies/NewMovies';
import Trending from './components/Trending/Trending';

const App = () => {
  const [category, setCategory] = useState('new');
  
  const getCategory = (category) => {
    setCategory(category)
  }

  const getQuery = (event) => {
    console.log(event.target.value)
  }
  console.log(category)
  return (
    <React.Fragment>
      <Header />
      <Banner />
      <BlockContainer>
        <Category getCategory={getCategory} getQuery={getQuery} />
        {category === 'new' && <NewMovies />}
        {category === 'trending' && <Trending />}
        {category === 'upcoming' && <UpcomingMovie />}
      </BlockContainer>
    </React.Fragment>
  )
  
}

export default App;
