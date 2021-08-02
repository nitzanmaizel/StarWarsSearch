import React from 'react';
import { Divider, Grid } from '@material-ui/core';
import NavBar from '../../Misc/NavBar/NavBar';
import SideBar from '../../Misc/SideBar/SideBar';
import DetialsInformation from '../../Misc/DetialsInformation/DetialsInformation';

import useMoviePage from './MoviePage.logic';

const isPhone = window.innerWidth < 800 && window.innerWidth > 0;

const MoviePage = (props) => {
  const { movieObj, movieChercters, movieSpecies, moviePlanets, movieVehicles } =
    useMoviePage(props);

  return (
    <Grid container>
      {!isPhone && (
        <Grid style={{ minWidth: '15%', minHeight: '100vh' }}>
          <SideBar />
        </Grid>
      )}
      <Grid style={{ flex: 1 }}>
        <NavBar />
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
          {movieChercters && <DetialsInformation detials={movieChercters} type='chercters' />}
          <Divider style={styles.divaider} />

          <div style={styles.detailsTitle}>Planets</div>
          {moviePlanets && <DetialsInformation detials={moviePlanets} type='planets' />}
          <Divider style={styles.divaider} />

          <div style={styles.detailsTitle}>Species</div>
          {movieSpecies && <DetialsInformation detials={movieSpecies} type='species' />}
          <Divider style={styles.divaider} />

          <div style={styles.detailsTitle}>Vehicles</div>
          {movieVehicles && <DetialsInformation detials={movieVehicles} type='vehicles' />}
        </div>
      </Grid>
    </Grid>
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
