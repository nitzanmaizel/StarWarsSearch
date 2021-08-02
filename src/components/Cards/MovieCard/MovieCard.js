import React from 'react';

const MovieCard = ({ movie, onClick }) => {
  return (
    <div
      onClick={() => onClick(movie)}
      style={{
        color: 'white',
        border: '1px solid black',
        margin: 3,
        borderRadius: 10,
        overflow: 'hidden',
      }}
    >
      <img src={movie.img} style={{ height: 300 }} />
      <div>{movie.title}</div>
    </div>
  );
};

export default MovieCard;
