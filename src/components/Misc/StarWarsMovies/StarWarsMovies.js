import React from 'react';
import { CircularProgress, Grid } from '@material-ui/core';

import MovieCard from '../../Cards/MovieCard/MovieCard';

const StarWarsMovies = ({ starWarsMovies, onClick }) => {
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
          <MovieCard key={movie.episode_id} movie={movie} onClick={onClick} />
        ))
      ) : (
        <CircularProgress />
      )}
    </Grid>
  );
};

export default StarWarsMovies;
