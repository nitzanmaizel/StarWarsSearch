import React from 'react';

const VehicleCard = ({ vehicle }) => {
  return (
    <div style={styles.container}>
      <div>
        <span style={styles.chercterLabel}>Name: </span>
        {vehicle.name}
      </div>
      <div>
        <span style={styles.chercterLabel}>Model: </span>
        {vehicle.model}
      </div>
      <div>
        <span style={styles.chercterLabel}>Crew: </span>
        {vehicle.crew}
      </div>
      <div>
        <span style={styles.chercterLabel}>Length: </span>
        {vehicle.length}
      </div>
      <div>
        <span style={styles.chercterLabel}>Speed: </span>
        {vehicle.max_atmosphering_speed}
      </div>
      <div>
        <span style={styles.chercterLabel}>Cost: </span>
        {vehicle.cost_in_credits}
      </div>
    </div>
  );
};

export default VehicleCard;

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
