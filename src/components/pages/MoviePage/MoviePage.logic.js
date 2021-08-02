import { useEffect, useState } from 'react';
import { SendFullUrlRequest } from '../../../utils/SendFullUrlRequest';

const useMoviePage = (props) => {
  const [movieObj, setMovieObject] = useState(null);
  const [movieChercters, setMovieChercters] = useState([]);
  const [movieSpecies, setMovieSpecies] = useState([]);
  const [moviePlanets, setMoviePlanets] = useState([]);
  const [movieVehicles, setMovieVehicles] = useState([]);

  useEffect(() => {
    if (props && props.location) {
      setMovieObject(props.location.state);
    }
  }, [props]);

  useEffect(() => {
    if (movieObj) {
      handleMovieData(movieObj);
    }
  }, [movieObj]);

  const handleMovieData = async (movie) => {
    try {
      const chercters = await updateRelevantArray(movie.characters);
      const planents = await updateRelevantArray(movie.planets);
      const species = await updateRelevantArray(movie.species);
      const vehicles = await updateRelevantArray(movie.vehicles);

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
      let itemObj = await SendFullUrlRequest(url);
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
