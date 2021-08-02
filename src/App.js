import React from 'react';

import { Switch, Route } from 'react-router-dom';
import './App.css';
// import FavouritesPage from './components/pages/FavouritesPage/FavouritesPage';
import HomePage from './components/pages/HomePage/HomePage';
// import MoviePage from './components/pages/MoviePage/MoviePage';

const App = () => {
  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
      {/* <Route exact path='/movie/:movieId' component={MoviePage} />
      <Route exact path='/favorites' component={FavouritesPage} /> */}
    </Switch>
  );
};

export default App;
