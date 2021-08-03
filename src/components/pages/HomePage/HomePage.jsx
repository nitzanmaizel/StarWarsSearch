import React, { useContext, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import NavBar from '../../Misc/NavBar/NavBar';
import SideBar from '../../Misc/SideBar/SideBar';
import LandingPage from '../LandingPage/LandingPage';
import { MoviesContext, MoviesContextFunctions } from '../../store/MoviesContextProvider';
import MoviePage from '../MoviePage/MoviePage';

const HomePage = () => {
  const { starWarsMovies, currentMovie, isPhone } = useContext(MoviesContext);
  const { changeCurrentMovie, removeCurrentMovie } = useContext(MoviesContextFunctions);

  return (
    <Grid container>
      {!isPhone && (
        <Grid style={{ minWidth: '15%', height: '110vh' }}>
          <SideBar
            starWarsMovies={starWarsMovies}
            onClickLogo={removeCurrentMovie}
            onClick={changeCurrentMovie}
          />
        </Grid>
      )}

      <Grid style={{ flex: 1 }}>
        <NavBar
          onClickLogo={removeCurrentMovie}
          onClick={changeCurrentMovie}
          starWarsMovies={starWarsMovies}
        />
        {currentMovie ? (
          <MoviePage movie={currentMovie} />
        ) : (
          <LandingPage starWarsMovies={starWarsMovies} onClick={changeCurrentMovie} />
        )}
      </Grid>
    </Grid>
  );
};

export default HomePage;
