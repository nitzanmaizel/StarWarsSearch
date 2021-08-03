import React from 'react';
import { Switch, Route } from 'react-router-dom';

import FavouritesPage from './components/pages/FavouritesPage/FavouritesPage';
import HomePage from './components/pages/HomePage/HomePage';
import './App.css';

const App = () => {
  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/favorites' component={FavouritesPage} />
    </Switch>
  );
};

export default App;
