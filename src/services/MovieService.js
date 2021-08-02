const addStarWrasMoviesToLocalSorge = (starWarsMovies) => {
  console.log(starWarsMovies, 'starWarsMovies');
  localStorage.setItem('starWarsMovies', JSON.stringify(starWarsMovies));
};

export default {
  addStarWrasMoviesToLocalSorge,
};
