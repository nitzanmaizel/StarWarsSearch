import React from 'react';

const ChercterCard = ({ chercter }) => {
  return (
    <div style={styles.container}>
      <div>
        <span style={styles.chercterLabel}>Name: </span>
        {chercter.name}
      </div>
      <div>
        <span style={styles.chercterLabel}>Gender: </span>
        {chercter.gender}
      </div>
      <div>
        <span style={styles.chercterLabel}>Birth Year: </span>
        {chercter.birth_year}
      </div>
      <div>
        <span style={styles.chercterLabel}>Height: </span>
        {chercter.height}
      </div>
      <div>
        <span style={styles.chercterLabel}>Skin Color: </span>
        {chercter.skin_color}
      </div>
      <div>
        <span style={styles.chercterLabel}>Hair Color: </span>
        {chercter.hair_color}
      </div>
    </div>
  );
};

export default ChercterCard;

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
