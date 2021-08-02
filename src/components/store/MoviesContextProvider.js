import React, { createContext, useState, useEffect, useRef } from 'react';
import { sendRequest } from '../../utils/SendRequest';

export const MoviesContext = createContext({});
export const MoviesContextFunctions = createContext({});

const starWarsCoverImage = {
  1: 'https://lumiere-a.akamaihd.net/v1/images/Star-Wars-Phantom-Menace-I-Poster_3c1ff9eb.jpeg?region=15%2C9%2C651%2C979&width=480',
  2: 'https://lumiere-a.akamaihd.net/v1/images/Star-Wars-Attack-Clones-II-Poster_53baa2e7.jpeg?region=18%2C0%2C660%2C1000&width=480',
  3: 'https://lumiere-a.akamaihd.net/v1/images/Star-Wars-Revenge-Sith-III-Poster_646108ce.jpeg?region=0%2C0%2C736%2C1090&width=480',
  4: 'https://lumiere-a.akamaihd.net/v1/images/Star-Wars-New-Hope-IV-Poster_c217085b.jpeg?region=49%2C43%2C580%2C914&width=480',
  5: 'https://lumiere-a.akamaihd.net/v1/images/Star-Wars-Empire-Strikes-Back-V-Poster_878f7fce.jpeg?region=25%2C22%2C612%2C953&width=480',
  6: 'https://lumiere-a.akamaihd.net/v1/images/Star-Wars-Return-Jedi-VI-Poster_a10501d2.jpeg?region=12%2C9%2C618%2C982&width=480',
};

const favoriteItems = ['films', 'people', 'planets', 'species', 'vehicles'];

export const MoviesContextProvider = ({ children }) => {
  const [starWarsMovies, setStarWarsMovie] = useState([]);

  useEffect(() => {
    getMoviesData();
  }, []);

  const getMoviesData = async () => {
    try {
      const res = await sendRequest('/films');
      if (res && res.data) {
        const moviesWithImg = addImageUrl(res.data.results);
        setStarWarsMovie(moviesWithImg);
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
      };
      updatedMovies.push(movieWithImage);
    });
    return updatedMovies;
  };

  const context = { starWarsMovies, favoriteItems };
  const contextFunctions = useRef({ setStarWarsMovie });

  return (
    <MoviesContext.Provider value={context}>
      <MoviesContextFunctions.Provider value={contextFunctions.current}>
        {children}
      </MoviesContextFunctions.Provider>
    </MoviesContext.Provider>
  );
};
