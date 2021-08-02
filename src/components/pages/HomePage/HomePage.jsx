import { Divider, Grid } from '@material-ui/core';
import React from 'react';
import NavBar from '../../Misc/NavBar/NavBar';
import SideBar from '../../Misc/SideBar/SideBar';
import StarWarsMovies from '../../Misc/StarWarsMovies/StarWarsMovies';

const isPhone = window.innerWidth < 800 && window.innerWidth > 0;

const HomePage = () => {
  return (
    <Grid container>
      {!isPhone && (
        <Grid style={{ minWidth: '15%', height: '110vh' }}>
          <SideBar />
        </Grid>
      )}
      <Grid style={{ flex: 1 }}>
        <NavBar />
        <div style={{ display: 'flex', height: '100vh' }}>
          <div style={{ textAlign: 'center', flex: 1 }}>
            <div style={{ fontSize: 60, color: '#FFE300' }}>SWI</div>
            <div style={{ fontSize: 25, color: '#FFE300' }}>The Star Wars Informtion Website</div>
            <div style={{ marginTop: 20 }}>
              <div style={{ fontSize: 15, color: 'white', marginBottom: 15 }}>
                Get informtion from all six movies
              </div>
              <div style={{ fontSize: 15, color: 'white', marginBottom: 15 }}>
                Planets, Spaceships, Vehicles, People and Species
              </div>
            </div>
            <Divider />
            <div style={{ marginTop: 20 }}>
              <StarWarsMovies />
            </div>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default HomePage;
