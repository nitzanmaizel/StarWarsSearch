import { useEffect, useState, useContext } from 'react';
import MovieService from '../../../services/MovieService';
import { sendRequest } from '../../../utils/SendRequest';
import { MoviesContextFunctions } from '../../store/MoviesContextProvider';

const useMoviePage = ({ movie }) => {
  const { setStarWarsMovie } = useContext(MoviesContextFunctions);
  const [movieObj, setMovieObject] = useState(null);
  const [movieChercters, setMovieChercters] = useState([]);
  const [movieSpecies, setMovieSpecies] = useState([]);
  const [moviePlanets, setMoviePlanets] = useState([]);
  const [movieVehicles, setMovieVehicles] = useState([]);

  useEffect(() => {
    let isSubscribed = true;
    setMovieObject(movie);
    if (movieObj && isSubscribed) {
      handleMovieData(movieObj);
    }
    return () => (isSubscribed = false);
  }, [movie, movieObj]);

  const handleMovieData = async (movie) => {
    try {
      let chercters, planents, species, vehicles;

      if (movie.isNeedMoreData) {
        chercters = await updateRelevantArray(movie.characters);
        planents = await updateRelevantArray(movie.planets);
        species = await updateRelevantArray(movie.species);
        vehicles = await updateRelevantArray(movie.vehicles);
        let updatedMovie = {
          ...movie,
          isNeedMoreData: false,
          chercters: chercters,
          planents: planents,
          species: species,
          vehicles: vehicles,
        };
        const updateMovies = MovieService.updateMovieData(updatedMovie);
        setStarWarsMovie(updateMovies);
      } else {
        chercters = movie.characters;
        planents = movie.planets;
        species = movie.species;
        vehicles = movie.vehicles;
      }
      if (chercters) setMovieChercters(chercters);
      if (planents) setMoviePlanets(planents);
      if (species) setMovieSpecies(species);
      if (vehicles) setMovieVehicles(vehicles);
    } catch (error) {
      console.error(['MoviePage.js'], error);
    }
  };

  const updateRelevantArray = async (movieArray) => {
    let updetedArray = [];
    for (const url of movieArray) {
      let itemObj = await sendRequest(url);
      updetedArray.push(itemObj.data);
    }
    return updetedArray;
  };

  return {
    movieObj,
    movieChercters,
    movieSpecies,
    moviePlanets,
    movieVehicles,
  };
};

export default useMoviePage;
