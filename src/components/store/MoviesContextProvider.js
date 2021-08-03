import React, { createContext, useState, useEffect, useRef } from 'react';
import MovieService from '../../services/MovieService';
import { sendRequest } from '../../utils/SendRequest';

export const MoviesContext = createContext({});
export const MoviesContextFunctions = createContext({});

export const MoviesContextProvider = ({ children }) => {
  const [starWarsMovies, setStarWarsMovie] = useState([]);
  const [currentMovie, setCurrentMovie] = useState(null);
  const [currentFavourite, setCurrentFavourite] = useState([]);
  const [loading, setLoading] = useState(false);

  const isPhone = window.innerWidth < 800 && window.innerWidth > 0;

  useEffect(() => {
    getStarWarsMovie();
  }, []);

  const getStarWarsMovie = async () => {
    const movies = await MovieService.getStarWarsMovies();
    setStarWarsMovie(movies);
  };

  const changeCurrentMovie = async (movie) => {
    setLoading(true);
    let chercters, planents, species, vehicles;

    if (movie.isNeedMoreData) {
      chercters = await updateRelevantArray(movie.characters);
      planents = await updateRelevantArray(movie.planets);
      species = await updateRelevantArray(movie.species);
      vehicles = await updateRelevantArray(movie.vehicles);
      let updatedMovieWithAllData = {
        ...movie,
        isNeedMoreData: false,
        chercters: chercters,
        planents: planents,
        species: species,
        vehicles: vehicles,
      };
      const updatedMovies = MovieService.updateMovieData(updatedMovieWithAllData);
      setStarWarsMovie(updatedMovies);
      setCurrentMovie(updatedMovieWithAllData);
    } else {
      setCurrentMovie(movie);
    }
    setLoading(false);
  };

  const removeCurrentMovie = () => {
    setCurrentMovie(null);
  };

  const handleLikeMovie = async (movie) => {
    const starWarsMovies = await MovieService.getStarWarsMovies();
    let updatedMovie = movie;
    const index = starWarsMovies.findIndex((startWarsMovie) => startWarsMovie.id === movie.id);
    updatedMovie.isFavourit = movie.isFavourit === true ? false : true;
    starWarsMovies[index] = updatedMovie;
    if (updatedMovie.isFavourit) {
      MovieService.addItemToFavourites(movie, 'films');
    } else {
      MovieService.removeItemFromFavourites(movie, 'films');
    }
    setStarWarsMovie(starWarsMovies);
    MovieService.updateMovieData(movie);
  };

  const updateRelevantArray = async (movieArray) => {
    let updetedArray = [];
    for (const url of movieArray) {
      let itemObj = await sendRequest(url);
      itemObj.isFavourit = false;
      updetedArray.push(itemObj.data);
    }
    return updetedArray;
  };

  const context = {
    starWarsMovies,
    currentMovie,
    currentFavourite,
    isPhone,
    loading,
  };

  const contextFunctions = useRef({
    setStarWarsMovie,
    setCurrentMovie,
    setCurrentFavourite,
    changeCurrentMovie,
    removeCurrentMovie,
    handleLikeMovie,
  });

  return (
    <MoviesContext.Provider value={context}>
      <MoviesContextFunctions.Provider value={contextFunctions.current}>
        {children}
      </MoviesContextFunctions.Provider>
    </MoviesContext.Provider>
  );
};
