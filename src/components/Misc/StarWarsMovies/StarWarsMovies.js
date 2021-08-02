import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { CircularProgress, Grid } from '@material-ui/core';

import MovieCard from '../../Cards/MovieCard/MovieCard';
import { MoviesContext } from '../../store/MoviesContextProvider';

const StarWarsMovies = () => {
  let history = useHistory();
  const { starWarsMovies } = useContext(MoviesContext);

  const onClickMovieCard = (movie) => {
    history.push({
      pathname: `/movie/${movie.episode_id}`,
      state: movie,
    });
  };

  return (
    <Grid
      justifyContent='center'
      container
      item
      spacing={2}
      xs={12}
      sm={12}
      md={12}
      lg={12}
      style={{ flexGrow: 1, margin: 'auto' }}
    >
      {starWarsMovies.length > 0 ? (
        starWarsMovies.map((movie) => (
          <MovieCard key={movie.episode_id} movie={movie} onClick={onClickMovieCard} />
        ))
      ) : (
        <CircularProgress />
      )}
    </Grid>
  );
};

export default StarWarsMovies;
