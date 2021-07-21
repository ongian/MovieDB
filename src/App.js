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
  const [category, setCategory] = useState('upcoming');
  
  const getCategory = (category) => {
    setCategory(category)
  }
  console.log(category)
  return (
    <React.Fragment>
      <Header />
      <Banner />
      <BlockContainer>
        <Category getCategory={getCategory} />
        {category === 'upcoming' && <UpcomingMovie />}
        {category === 'new' && <NewMovies />}
        {category === 'trending' && <Trending />}
      </BlockContainer>
    </React.Fragment>
  )
  
}

export default App;
