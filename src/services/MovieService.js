import { sendRequest } from '../utils/SendRequest';

const starWarsCoverImage = {
  1: 'https://lumiere-a.akamaihd.net/v1/images/Star-Wars-Phantom-Menace-I-Poster_3c1ff9eb.jpeg?region=15%2C9%2C651%2C979&width=480',
  2: 'https://lumiere-a.akamaihd.net/v1/images/Star-Wars-Attack-Clones-II-Poster_53baa2e7.jpeg?region=18%2C0%2C660%2C1000&width=480',
  3: 'https://lumiere-a.akamaihd.net/v1/images/Star-Wars-Revenge-Sith-III-Poster_646108ce.jpeg?region=0%2C0%2C736%2C1090&width=480',
  4: 'https://lumiere-a.akamaihd.net/v1/images/Star-Wars-New-Hope-IV-Poster_c217085b.jpeg?region=49%2C43%2C580%2C914&width=480',
  5: 'https://lumiere-a.akamaihd.net/v1/images/Star-Wars-Empire-Strikes-Back-V-Poster_878f7fce.jpeg?region=25%2C22%2C612%2C953&width=480',
  6: 'https://lumiere-a.akamaihd.net/v1/images/Star-Wars-Return-Jedi-VI-Poster_a10501d2.jpeg?region=12%2C9%2C618%2C982&width=480',
};

const BASEURL = 'https://swapi.dev/api/';

const addStarWrasMoviesToLocalSorge = (starWarsMovies) => {
  localStorage.setItem('starWarsMovies', JSON.stringify(starWarsMovies));
};

const getStarWarsMovies = async () => {
  const starWarsMovies = JSON.parse(localStorage.getItem('starWarsMovies'));
  if (starWarsMovies) return starWarsMovies;
  else return getStarWarsMoviesFromAPI();
};

const getStarWarsMoviesFromAPI = async () => {
  try {
    const res = await sendRequest(BASEURL + '/films');
    if (res && res.data) {
      const moviesWithImg = addImageUrl(res.data.results);
      addStarWrasMoviesToLocalSorge(moviesWithImg);
      return moviesWithImg;
    }
  } catch (error) {
    console.log(error, 'error');
  }
};

const addImageUrl = (movies) => {
  let updatedMovies = [];
  movies.forEach((movie) => {
    let img = starWarsCoverImage[movie.episode_id];
    let movieWithImage = {
      ...movie,
      img: img,
      id: movie.episode_id,
      isFavourit: false,
      isNeedMoreData: true,
    };
    updatedMovies.push(movieWithImage);
  });
  return updatedMovies;
};

const updateMovieData = (updatedMovie) => {
  let starWarsMovies = JSON.parse(localStorage.getItem('starWarsMovies'));
  if (starWarsMovies) {
    let movieIndex = starWarsMovies.findIndex((movie) => movie.id === updatedMovie.id);
    starWarsMovies[movieIndex] = updatedMovie;
    localStorage.setItem('starWarsMovies', JSON.stringify(starWarsMovies));
    return starWarsMovies;
  }
};

const addItemToFavourites = (item, type) => {
  let favouriteItems = JSON.parse(localStorage.getItem(`favourite-${type}`));
  if (favouriteItems) {
    if (favouriteItems.length > 0) {
      favouriteItems.forEach((favourite) => {
        if (favourite.id !== item.id) {
          localStorage.setItem(`favourite-${type}`, JSON.stringify([...favouriteItems, item]));
        }
      });
    } else localStorage.setItem(`favourite-${type}`, JSON.stringify([item]));
  } else {
    localStorage.setItem(`favourite-${type}`, JSON.stringify([item]));
  }
};

const removeItemFromFavourites = (item, type) => {
  console.log(item, 'item');
  let favouriteItems = JSON.parse(localStorage.getItem(`favourite-${type}`));
  if (favouriteItems) {
    let favouriteIndex = favouriteItems.findIndex((favourite) => favourite.id === item.id);
    favouriteItems.splice(favouriteIndex, 1);
    localStorage.setItem(`favourite-${type}`, JSON.stringify(favouriteItems));
  }
};

const getFavouritesItems = (type) => {
  let favouriteItems = JSON.parse(localStorage.getItem(`favourite-${type}`));
  if (favouriteItems) return favouriteItems;
  else {
    localStorage.setItem(`favourite-${type}`, JSON.stringify([]));
    return [];
  }
};

export default {
  getStarWarsMovies,
  updateMovieData,
  addItemToFavourites,
  getFavouritesItems,
  removeItemFromFavourites,
};
