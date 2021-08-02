import React, { useState, useContext, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import NavBar from '../../Misc/NavBar/NavBar';
import SideBar from '../../Misc/SideBar/SideBar';
import LandingPage from '../LandingPage/LandingPage';

const isPhone = window.innerWidth < 800 && window.innerWidth > 0;

const HomePage = () => {
  const [currentMovie, setCurrentMovie] = useState(null);

  useEffect(() => {}, [currentMovie]);

  return (
    <Grid container>
      {!isPhone && (
        <Grid style={{ minWidth: '15%', height: '110vh' }}>
          <SideBar />
        </Grid>
      )}
      <Grid style={{ flex: 1 }}>
        <NavBar />
        <LandingPage />
      </Grid>
    </Grid>
  );
};

export default HomePage;
