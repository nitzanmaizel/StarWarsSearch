import React from 'react';
import { CircularProgress, Divider } from '@material-ui/core';

import MovieDetials from '../../Misc/MovieDetials/MovieDetials';
import useMoviePage from './MoviePage.logic';

const MoviePage = ({ movie }) => {
  const { movieObj, movieChercters, movieSpecies, moviePlanets, movieVehicles, loading } =
    useMoviePage({
      movie,
    });

  if (loading)
    return (
      <div style={{ textAlign: 'center', marginTop: 20 }}>
        <CircularProgress />
      </div>
    );
  else
    return (
      <div style={styles.movieDataWrapper}>
        {movieObj && (
          <div>
            <div style={styles.movieTitle}>{movieObj.title}</div>
            <img src={movieObj.img} height={400} />
            <div style={styles.movieSubTitle}>{movieObj.opening_crawl}</div>
            <Divider style={styles.divaider} />
          </div>
        )}
        <div style={styles.detailsTitle}>Chercters</div>
        {movieChercters && <MovieDetials detials={movieChercters} type='chercters' />}
        <Divider style={styles.divaider} />

        <div style={styles.detailsTitle}>Planets</div>
        {moviePlanets && <MovieDetials detials={moviePlanets} type='planets' />}
        <Divider style={styles.divaider} />

        <div style={styles.detailsTitle}>Species</div>
        {movieSpecies && <MovieDetials detials={movieSpecies} type='species' />}
        <Divider style={styles.divaider} />

        <div style={styles.detailsTitle}>Vehicles</div>
        {movieVehicles && <MovieDetials detials={movieVehicles} type='vehicles' />}
      </div>
    );
};

export default MoviePage;

const styles = {
  movieDataWrapper: {
    textAlign: 'center',
    color: 'white',
  },
  movieTitle: {
    fontSize: 20,
    margin: 10,
  },
  movieSubTitle: {
    alignSelf: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  detailsTitle: {
    fontSize: 26,
    color: '#FFE300',
  },
  divaider: {
    marginTop: 10,
    marginBottom: 10,
    height: 5,
  },
};
