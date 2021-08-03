import React, { createContext, useState, useEffect, useRef } from 'react';
import MovieService from '../../services/MovieService';

export const MoviesContext = createContext({});
export const MoviesContextFunctions = createContext({});

export const MoviesContextProvider = ({ children }) => {
  const [starWarsMovies, setStarWarsMovie] = useState([]);
  const [currentMovie, setCurrentMovie] = useState(null);
  const [currentFavourite, setCurrentFavourite] = useState([]);
  const [favouriteTitle, setFavouriteTitle] = useState('');
  const [favouriteFilms, setFavouriteFilms] = useState([]);
  const [favouritePeople, setFavouritePeople] = useState([]);
  const [favouritePlanets, setFavouritPlanets] = useState([]);
  const [favouriteSpeciess, setFavouriteSpeciess] = useState([]);
  const [favouriteVehicles, setFavouriteVehicles] = useState([]);

  const isPhone = window.innerWidth < 800 && window.innerWidth > 0;

  useEffect(() => {
    getStarWarsMovie();
    getFavourites();
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

  const getFavourites = () => {
    let films, chercters, planents, species, vehicles;
    films = MovieService.getFavouritesItems('films');
    chercters = MovieService.getFavouritesItems('people');
    planents = MovieService.getFavouritesItems('planets');
    species = MovieService.getFavouritesItems('species');
    vehicles = MovieService.getFavouritesItems('vehicles');
    if (films) setFavouriteFilms(films);
    if (chercters) setFavouritePeople(chercters);
    if (planents) setFavouritPlanets(planents);
    if (species) setFavouriteSpeciess(species);
    if (vehicles) setFavouriteVehicles(vehicles);
  };

  const handleLikeMovie = async (movie) => {
    console.log(movie, 'movie');
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

  const handleLikeItem = (item, type) => {
    console.log(item, type);
  };

  const changeCurrentFavourites = (type) => {
    setFavouriteTitle(type);
    let favourites = MovieService.getFavouritesItems(type);
    if (type === 'films') setCurrentFavourite(favourites);
    else if (type === 'people') setCurrentFavourite(favourites);
    else if (type === 'planets') setCurrentFavourite(favourites);
    else if (type === 'species') setCurrentFavourite(favourites);
    else if (type === 'vehicles') setCurrentFavourite(favourites);
  };

  const context = {
    starWarsMovies,
    currentMovie,
    currentFavourite,
    favouriteTitle,
    favouriteFilms,
    favouritePeople,
    favouritePlanets,
    favouriteSpeciess,
    favouriteVehicles,
    isPhone,
  };

  const contextFunctions = useRef({
    setStarWarsMovie,
    setCurrentMovie,
    setCurrentFavourite,
    changeCurrentMovie,
    removeCurrentMovie,
    handleLikeMovie,
    handleLikeItem,
    changeCurrentFavourites,
  });

  return (
    <MoviesContext.Provider value={context}>
      <MoviesContextFunctions.Provider value={contextFunctions.current}>
        {children}
      </MoviesContextFunctions.Provider>
    </MoviesContext.Provider>
  );
};
