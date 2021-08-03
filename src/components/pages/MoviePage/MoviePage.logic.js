import { useEffect, useState, useContext } from 'react';
import { MoviesContext } from '../../store/MoviesContextProvider';

const useMoviePage = ({ movie }) => {
  const { loading } = useContext(MoviesContext);
  const [movieObj, setMovieObject] = useState(null);
  const [movieChercters, setMovieChercters] = useState([]);
  const [movieSpecies, setMovieSpecies] = useState([]);
  const [moviePlanets, setMoviePlanets] = useState([]);
  const [movieVehicles, setMovieVehicles] = useState([]);

  useEffect(() => {
    setMovieObject(movie);
    if (movieObj) {
      handleMovieData(movieObj);
    }
  }, [movie, movieObj]);

  const handleMovieData = async (movie) => {
    try {
      setMovieChercters(movie.chercters);
      setMoviePlanets(movie.planents);
      setMovieSpecies(movie.species);
      setMovieVehicles(movie.vehicles);
    } catch (error) {
      console.error(['MoviePage.js'], error);
    }
  };

  return {
    movieObj,
    movieChercters,
    movieSpecies,
    moviePlanets,
    movieVehicles,
    loading,
  };
};

export default useMoviePage;
