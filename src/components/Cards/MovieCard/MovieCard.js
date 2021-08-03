import React from 'react';
import HeartIcon from '../../icons/HeartIcon';

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
      <div>
        <HeartIcon fill='black' isSelected={movie.isFavourit} />
      </div>
    </div>
  );
};

export default MovieCard;
