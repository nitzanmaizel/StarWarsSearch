import React, { useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';

import { MoviesContext } from '../../store/MoviesContextProvider';

const SideBar = () => {
  let history = useHistory();

  const { starWarsMovies, favoriteItems } = useContext(MoviesContext);

  const path = history.location.pathname;

  const onClickMovieLink = (movie) => {
    history.push({
      pathname: `/movie/${movie.episode_id}`,
      state: movie,
    });
  };

  console.log(path, 'path');
  return (
    <div style={styles.container}>
      <Link style={styles.sideBarLogo} to='/'>
        SWI
      </Link>
      {path === '/favorites' &&
        favoriteItems.map((title) => (
          <div style={styles.sideBarItem} key={title}>
            {title.toUpperCase()}
          </div>
        ))}
      {path !== '/favorites' &&
        starWarsMovies.length > 0 &&
        starWarsMovies.map((movie, index) => (
          <div key={index} onClick={() => onClickMovieLink(movie)} style={styles.sideBarItem}>
            {movie.title}
          </div>
        ))}
    </div>
  );
};

export default SideBar;

const styles = {
  container: {
    minHeight: '100%',
    backgroundColor: '#303030',
    minWidth: '15%',
    padding: 5,
  },
  sideBarItem: {
    padding: 5,
    fontFamily: 'DIN, Helvetica, Arial, sans-serif',
    fontSize: 18,
    color: 'white',
    marginBottom: 10,
    marginRight: 20,
    textDecoration: 'none',
    color: 'white',
    display: 'block',
  },
  sideBarLogo: {
    fontFamily: 'DIN, Helvetica, Arial, sans-serif',
    fontSize: 24,
    textDecoration: 'none',
    color: '#FFE300',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    textAlign: 'center',
    justifySelf: 'center',
  },
};
