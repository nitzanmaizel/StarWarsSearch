import React, { createContext, useState, useEffect, useRef } from 'react';
import MovieService from '../../services/MovieService';

export const MoviesContext = createContext({});
export const MoviesContextFunctions = createContext({});

export const MoviesContextProvider = ({ children }) => {
  const [starWarsMovies, setStarWarsMovie] = useState([]);
  const [currentMovie, setCurrentMovie] = useState(null);

  const isPhone = window.innerWidth < 800 && window.innerWidth > 0;
  useEffect(() => {
    getStarWarsMovie();
  }, []);

  const getStarWarsMovie = async () => {
    const movies = await MovieService.getStarWarsMovies();
    setStarWarsMovie(movies);
  };
  const changeCurrentMovie = (movie) => {
    setCurrentMovie(movie);
  };

  const removeCurrentMovie = () => {
    setCurrentMovie(null);
  };

  // const handleMovieData = async (movie) => {
  //   try {
  //     const chercters = await updateRelevantArray(movie.characters);
  //     const planents = await updateRelevantArray(movie.planets);
  //     const species = await updateRelevantArray(movie.species);
  //     const vehicles = await updateRelevantArray(movie.vehicles);

  //     if (chercters) setMovieChercters(chercters);
  //     if (planents) setMoviePlanets(planents);
  //     if (species) setMovieSpecies(species);
  //     if (vehicles) setMovieVehicles(vehicles);
  //   } catch (error) {
  //     console.error(['MoviePage.js'], error);
  //   }
  // };

  // const updateRelevantArray = async (movieArray) => {
  //   let updetedArray = [];
  //   for (const url of movieArray) {
  //     let itemObj = await SendFullUrlRequest(url);
  //     updetedArray.push(itemObj.data);
  //   }
  //   return updetedArray;
  // };

  const context = {
    starWarsMovies,
    currentMovie,
    isPhone,
  };
  const contextFunctions = useRef({
    setStarWarsMovie,
    setCurrentMovie,
    changeCurrentMovie,
    removeCurrentMovie,
  });

  return (
    <MoviesContext.Provider value={context}>
      <MoviesContextFunctions.Provider value={contextFunctions.current}>
        {children}
      </MoviesContextFunctions.Provider>
    </MoviesContext.Provider>
  );
};
