import React from 'react';
import NavBar from '../Misc/NavBar/NavBar';

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: 60, color: '#FFE300' }}>SWS</div>
        <div style={{ fontSize: 25, color: '#FFE300' }}>The Star Wars Search Web</div>
        <div style={{ marginTop: 20 }}>
          <div style={{ fontSize: 15, color: 'white', marginBottom: 5 }}>
            From all seven Star Wars films
          </div>
          <div style={{ fontSize: 15, color: 'white' }}>
            Planets, Spaceships, Vehicles, People, Films and Species
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
