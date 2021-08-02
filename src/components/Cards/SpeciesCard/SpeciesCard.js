import React from 'react';

const SpeciesCard = ({ species }) => {
  return (
    <div style={styles.container}>
      <div>
        <span style={styles.chercterLabel}>Name: </span>
        {species.name}
      </div>
      <div>
        <span style={styles.chercterLabel}>Language: </span>
        {species.language}
      </div>
      <div>
        <span style={styles.chercterLabel}>Average Height: </span>
        {species.average_height}
      </div>
      <div>
        <span style={styles.chercterLabel}>Average Lifespan: </span>
        {species.average_lifespan}
      </div>
      <div>
        <span style={styles.chercterLabel}>Classification: </span>
        {species.classification}
      </div>
    </div>
  );
};

export default SpeciesCard;

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
    marginBottom: 20,
  },
  chercterLabel: {
    fontSize: 18,
    color: 'black',
    fontWeight: 500,
  },
};
