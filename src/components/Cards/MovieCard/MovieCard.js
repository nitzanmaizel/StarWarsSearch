import React, { useContext } from 'react';
import HeartIcon from '../../icons/HeartIcon';
import { MoviesContextFunctions } from '../../store/MoviesContextProvider';

const MovieCard = ({ movie, onClick }) => {
  const { handleLikeMovie } = useContext(MoviesContextFunctions);
  return (
    <div style={styles.container}>
      <div onClick={() => onClick(movie)}>
        <img src={movie.img} style={{ height: 300 }} />
        <div>{movie.title}</div>
      </div>
      <div onClick={() => handleLikeMovie(movie)}>
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
