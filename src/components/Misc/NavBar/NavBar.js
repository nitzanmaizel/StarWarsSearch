import { AppBar, Button, IconButton, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <AppBar position='static' style={{ backgroundColor: '#3a3f44' }}>
      <Toolbar style={{ justifyContent: 'space-between' }}>
        <Typography variant='h6' style={{ color: '#FFE300' }}>
          SWS
        </Typography>
        <div style={{ display: 'flex' }}>
          <div>
            <Link style={{ textDecoration: 'none', color: 'white', padding: 5 }} to='/favorite'>
              Favorite
            </Link>
          </div>
          <div>
            <Link style={{ textDecoration: 'none', color: 'white', padding: 5 }} to='/login'>
              Login
            </Link>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
