import React from 'react';

const SideBar = ({ starWarsMovies, favoriteItems, onClick, onClickLogo }) => {
  return (
    <div style={styles.container}>
      <div style={styles.sideBarLogo} onClick={onClickLogo}>
        SWI
      </div>
      {favoriteItems &&
        favoriteItems.map((title) => (
          <div style={styles.sideBarItem} key={title} onClick={() => onClick(title)}>
            {title.toUpperCase()}
          </div>
        ))}
      {starWarsMovies &&
        starWarsMovies.length > 0 &&
        starWarsMovies.map((movie, index) => (
          <div key={index} onClick={() => onClick(movie)} style={styles.sideBarItem}>
            {movie.title}
          </div>
        ))}
    </div>
  );
};

export default SideBar;

const styles = {
  container: {
    height: '100%',
    backgroundColor: '#303030',
    minWidth: '15%',
    padding: 5,
    overflow: 'hidden',
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
