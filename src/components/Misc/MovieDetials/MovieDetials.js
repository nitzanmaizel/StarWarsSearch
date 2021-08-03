import React, { useContext } from 'react';
import { CircularProgress, Grid } from '@material-ui/core';

import { MoviesContextFunctions } from '../../store/MoviesContextProvider';

import ChercterCard from '../../Cards/ChercterCard/ChercterCard';
import PlanetCard from '../../Cards/PlanetCard/PlanetCard';
import SpeciesCard from '../../Cards/SpeciesCard/SpeciesCard';
import VehicleCard from '../../Cards/VehicleCard/VehicleCard';

const MovieDetials = ({ detials, type }) => {
  const { handleLikeItem } = useContext(MoviesContextFunctions);
  return (
    <Grid justifyContent='space-around' container item xs={12} sm={12} md={12} lg={12}>
      {detials.length > 0 ? (
        detials.map((item, index) => {
          if (type === 'chercters')
            return (
              <ChercterCard
                onClick={() => handleLikeItem(item, type)}
                key={index}
                chercter={item}
              />
            );
          else if (type === 'planets')
            return (
              <PlanetCard onClick={() => handleLikeItem(item, type)} key={index} planet={item} />
            );
          else if (type === 'species')
            return (
              <SpeciesCard onClick={() => handleLikeItem(item, type)} key={index} species={item} />
            );
          else if (type === 'vehicles')
            return (
              <VehicleCard onClick={() => handleLikeItem(item, type)} key={index} vehicle={item} />
            );
        })
      ) : (
        <CircularProgress />
      )}
    </Grid>
  );
};

export default MovieDetials;
