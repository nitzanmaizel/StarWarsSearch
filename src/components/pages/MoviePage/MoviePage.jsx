import React from 'react';
import { Divider, Grid } from '@material-ui/core';
import NavBar from '../../Misc/NavBar/NavBar';
import SideBar from '../../Misc/SideBar/SideBar';
import MovieDetials from '../../Misc/MovieDetials/MovieDetials';

import useMoviePage from './MoviePage.logic';

const isPhone = window.innerWidth < 800 && window.innerWidth > 0;

const MoviePage = ({ movie }) => {
  const { movieObj, movieChercters, movieSpecies, moviePlanets, movieVehicles } = useMoviePage({
    movie,
  });

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
