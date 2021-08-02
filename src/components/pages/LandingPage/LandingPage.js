import { Divider } from '@material-ui/core';
import React from 'react';
import StarWarsMovies from '../../Misc/StarWarsMovies/StarWarsMovies';

const LandingPage = ({ starWarsMovies, onClick }) => {
  return (
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
          {starWarsMovies && <StarWarsMovies starWarsMovies={starWarsMovies} onClick={onClick} />}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
