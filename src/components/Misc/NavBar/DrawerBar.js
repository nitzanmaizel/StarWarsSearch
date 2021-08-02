import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';

import { MoviesContext } from '../../store/MoviesContextProvider';

const DrawerBar = () => {
  let history = useHistory();

  const { starWarsMovies } = useContext(MoviesContext);
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  const onClickLink = (movie) => {
    history.push({
      pathname: `/movie/${movie.episode_id}`,
      state: movie,
    });
  };

  const list = () => (
    <div
      role='presentation'
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
      style={{ padding: 10, backgroundColor: '#303030', height: '100%' }}
    >
      <List>
        <div
          style={{
            fontSize: 24,
            textAlign: 'center',
            textDecoration: 'underLine',
            color: 'white',
            marginBottom: 20,
          }}
        >
          Choose Movie
        </div>
        {starWarsMovies.map((movie, index) => (
          <div
            key={index}
            onClick={() => onClickLink(movie)}
            style={{ fontSize: 20, marginBottom: 10, color: 'white' }}
          >
            {movie.title}
          </div>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <React.Fragment>
        <div onClick={toggleDrawer}>
          <img src='https://img.icons8.com/material-outlined/24/000000/menu--v1.png' />
        </div>
        <Drawer anchor='left' open={openDrawer} onClose={toggleDrawer}>
          {list()}
        </Drawer>
      </React.Fragment>
    </div>
  );
};

export default DrawerBar;
