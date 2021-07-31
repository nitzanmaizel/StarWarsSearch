import React from 'react';
import { Container } from 'react-bootstrap';

import { Switch, Route, useHistory } from 'react-router-dom';
import './App.css';
import HomePage from './components/pages/HomePage';

const App = () => {
  return (
    <Container>
      <Switch>
        <Route exact path='/' component={HomePage} />
      </Switch>
    </Container>
  );
};

export default App;
