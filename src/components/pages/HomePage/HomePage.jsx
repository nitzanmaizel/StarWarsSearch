import React, { useContext, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import NavBar from '../../Misc/NavBar/NavBar';
import SideBar from '../../Misc/SideBar/SideBar';
import LandingPage from '../LandingPage/LandingPage';
import { MoviesContext, MoviesContextFunctions } from '../../store/MoviesContextProvider';

const HomePage = () => {
  const { starWarsMovies, currentMovie, isPhone } = useContext(MoviesContext);
  const { changeCurrentMovie } = useContext(MoviesContextFunctions);

  useEffect(() => {
    console.log(currentMovie, 'currentMovie');
  }, [currentMovie]);

  return (
    <Grid container>
      {!isPhone && (
        <Grid style={{ minWidth: '15%', height: '110vh' }}>
          <SideBar />
        </Grid>
      )}
      <Grid style={{ flex: 1 }}>
        <NavBar />
        <LandingPage starWarsMovies={starWarsMovies} onClick={changeCurrentMovie} />
        <HomePage />
      </Grid>
    </Grid>
  );
};

export default HomePage;
