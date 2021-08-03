import React from 'react';
import { Grid } from '@material-ui/core';
import MovieDetials from '../MovieDetials/MovieDetials';
import StarWarsMovies from '../StarWarsMovies/StarWarsMovies';

const ShowFavourites = ({ title, favourites }) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ fontSize: 60, color: '#FFE300' }}>{title.toUpperCase()}</div>
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
        <div>
          {favourites && favourites.length === 0 ? (
            <div style={{ color: 'white' }}>No Favourites</div>
          ) : favourites && title === 'films' ? (
            <StarWarsMovies starWarsMovies={favourites} />
          ) : (
            <MovieDetials detials={favourites} type={title} />
          )}
        </div>
      </Grid>
    </div>
  );
};

export default ShowFavourites;
