import React, { useState } from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';

const DrawerBar = ({ starWarsMovies, onClick }) => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  const list = () => (
    <div onClick={toggleDrawer} onKeyDown={toggleDrawer} style={styles.listContainer}>
      <List>
        <div style={styles.drawerHeader}>Choose Movie</div>
        {starWarsMovies &&
          starWarsMovies.length > 0 &&
          starWarsMovies.map((movie, index) => (
            <div
              key={index}
              onClick={() => onClick(movie)}
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

const styles = {
  drawerHeader: {
    fontSize: 24,
    textAlign: 'center',
    textDecoration: 'underLine',
    color: 'white',
    marginBottom: 20,
  },
  listContainer: {
    padding: 10,
    backgroundColor: '#303030',
    height: '100%',
  },
};
