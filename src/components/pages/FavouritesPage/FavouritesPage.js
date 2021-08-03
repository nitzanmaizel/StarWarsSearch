import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Grid } from '@material-ui/core';

import NavBar from '../../Misc/NavBar/NavBar';
import SideBar from '../../Misc/SideBar/SideBar';
import { MoviesContext, MoviesContextFunctions } from '../../store/MoviesContextProvider';
import ShowFavourites from '../../Misc/ShowFavourites/ShowFavourites';

const favoriteSideBar = ['films', 'people', 'planets', 'species', 'vehicles'];

const FavouritesPage = () => {
  let history = useHistory();
  const { currentFavourite, favouriteTitle, isPhone } = useContext(MoviesContext);
  const { changeCurrentFavourites } = useContext(MoviesContextFunctions);
  console.log(currentFavourite, 'currentFavourite');

  const goToHomePage = () => {
    history.push('/');
  };

  return (
    <Grid container>
      {!isPhone && (
        <Grid style={{ minWidth: '20%', minHeight: '100vh' }}>
          <SideBar
            onClick={changeCurrentFavourites}
            favoriteItems={favoriteSideBar}
            onClickLogo={goToHomePage}
          />
        </Grid>
      )}
      <Grid style={{ flex: 1 }}>
        <NavBar />
        {currentFavourite && (
          <ShowFavourites title={favouriteTitle} favourites={currentFavourite} />
        )}
      </Grid>
    </Grid>
  );
};

export default FavouritesPage;
