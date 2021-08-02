import React from 'react';

const PlanetCard = ({ planet }) => {
  return (
    <div style={styles.container}>
      <div>
        <span style={styles.chercterLabel}>Name: </span>
        {planet.name}
      </div>
      <div>
        <span style={styles.chercterLabel}>Population: </span>
        {planet.population}
      </div>
      <div>
        <span style={styles.chercterLabel}>Gravity: </span>
        {planet.gravity}
      </div>
      <div>
        <span style={styles.chercterLabel}>Climate: </span>
        {planet.climate}
      </div>
      <div>
        <span style={styles.chercterLabel}>Terrain: </span>
        {planet.terrain}
      </div>
    </div>
  );
};

export default PlanetCard;

const styles = {
  container: {
    color: 'white',
    border: '1px solid black',
    margin: 3,
    borderRadius: 5,
    overflow: 'hidden',
    padding: 5,
    textAlign: 'start',
    backgroundColor: '#A9A9A9',
  },
  chercterLabel: {
    fontSize: 18,
    color: 'black',
    fontWeight: 500,
  },
};
