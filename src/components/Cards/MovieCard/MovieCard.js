import React from 'react';
import HeartIcon from '../../icons/HeartIcon';

const MovieCard = ({ movie, onClick, onLike }) => {
  return (
    <div style={styles.container}>
      <div onClick={() => onClick(movie)}>
        <img src={movie.img} style={{ height: 300 }} />
        <div>{movie.title}</div>
      </div>
      <div onClick={() => onLike(movie)}>
        <HeartIcon fill='black' isSelected={movie.isFavourit} />
      </div>
    </div>
  );
};

export default MovieCard;

const styles = {
  container: {
    color: 'white',
    border: '1px solid black',
    margin: 3,
    borderRadius: 10,
    overflow: 'hidden',
  },
};
