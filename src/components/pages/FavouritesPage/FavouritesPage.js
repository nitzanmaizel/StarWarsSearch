import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { CircularProgress, Grid } from '@material-ui/core';

import NavBar from '../../Misc/NavBar/NavBar';
import { MoviesContext } from '../../store/MoviesContextProvider';
import MovieCard from '../../Cards/MovieCard/MovieCard';

const FavouritesPage = () => {
  let history = useHistory();
  const { starWarsMovies } = useContext(MoviesContext);
  const [favouritesMovies, setFavouritesMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getFavourites(starWarsMovies);
  }, [starWarsMovies]);

  const goToHomePage = () => {
    history.push('/');
  };

  const getFavourites = (moviesArray) => {
    setLoading(true);
    let favourites = [];
    console.log(moviesArray, 'moviesArray');
    moviesArray.forEach((movie) => {
      if (movie.isFavourit) {
        favourites.push(movie);
      }
    });
    setFavouritesMovies(favourites);
    setLoading(false);
  };

  return (
    <Grid container>
      <Grid style={{ flex: 1 }}>
        <NavBar withLogo onClickLogo={goToHomePage} />
        {loading ? (
          <div style={{ textAlign: 'center', marginTop: 20 }}>
            <CircularProgress />
          </div>
        ) : favouritesMovies.length > 0 ? (
          favouritesMovies.map((movie) => (
            <Grid
              justifyContent='center'
              container
              item
              spacing={2}
              xs={12}
              sm={12}
              md={12}
              lg={12}
              style={{ flexGrow: 1, margin: 'auto', textAlign: 'center' }}
            >
              <MovieCard showIcon={false} movie={movie} />
            </Grid>
          ))
        ) : (
          <div style={{ textAlign: 'center', fontSize: 25, color: '#FFE300', marginTop: 20 }}>
            No Favourites
          </div>
        )}
      </Grid>
    </Grid>
  );
};

export default FavouritesPage;
