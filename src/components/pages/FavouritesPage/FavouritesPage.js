import { Grid } from '@material-ui/core';
import React from 'react';
import NavBar from '../../Misc/NavBar/NavBar';
import SideBar from '../../Misc/SideBar/SideBar';

const isPhone = window.innerWidth < 800 && window.innerWidth > 0;

const FavouritesPage = () => {
  return (
    <Grid container>
      {!isPhone && (
        <Grid style={{ minWidth: '15%', minHeight: '100vh' }}>
          <SideBar />
        </Grid>
      )}
      <Grid style={{ flex: 1 }}>
        <NavBar />
      </Grid>
    </Grid>
  );
};

export default FavouritesPage;
