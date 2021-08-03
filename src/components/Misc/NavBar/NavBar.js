import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import { Link } from 'react-router-dom';

import DrawerBar from './DrawerBar';

const isPhone = window.innerWidth < 800 && window.innerWidth > 0;

const NavBar = ({ onClick, onClickLogo }) => {
  return (
    <AppBar position='static' style={styles.appBarContainer}>
      <Toolbar style={styles.toolBar}>
        {isPhone && (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ marginTop: 5 }}>
              <DrawerBar onClick={onClick} />
            </div>
            <div style={styles.logo} onClick={onClickLogo}>
              SWI
            </div>
          </div>
        )}
        <Link style={styles.favorite} to='/favorites'>
          Favorites
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;

const styles = {
  appBarContainer: {
    backgroundColor: '#3a3f44',
    minHeight: 60,
  },
  toolBar: {
    justifyContent: isPhone ? 'space-between' : 'flex-end',
  },
  drawerWrapper: {},
  logo: {
    marginLeft: 10,
    textDecoration: 'none',
    color: 'white',
    padding: 5,
    fontSize: 20,
  },
  favorite: {
    textDecoration: 'none',
    color: 'white',
    padding: 5,
  },
};
