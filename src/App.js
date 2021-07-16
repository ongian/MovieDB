import React from 'react';
import './index.css';
import Header from './components/header/Header';
import BlockContainer from './components/utilities/blockContainer/BlockContainer';
import Banner from './components/banner/Banner';
import Category from './components/category/Category';
import UpcomingMovie from './components/UpcomingMovie/UpcomingMovie.js';

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Banner />
      <BlockContainer>
        <Category />
        <UpcomingMovie />
      </BlockContainer>
    </React.Fragment>
  )
  
}

export default App;
