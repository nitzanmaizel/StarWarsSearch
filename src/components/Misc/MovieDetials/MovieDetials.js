import React from 'react';
import { CircularProgress, Grid } from '@material-ui/core';

import ChercterCard from '../../Cards/ChercterCard/ChercterCard';
import PlanetCard from '../../Cards/PlanetCard/PlanetCard';
import SpeciesCard from '../../Cards/SpeciesCard/SpeciesCard';
import VehicleCard from '../../Cards/VehicleCard/VehicleCard';

const MovieDetials = ({ detials, type }) => {
  return (
    <Grid justifyContent='space-around' container item xs={12} sm={12} md={12} lg={12}>
      {detials.length > 0 ? (
        detials.map((item, index) => {
          if (type === 'chercters') return <ChercterCard key={index} chercter={item} />;
          else if (type === 'planets') return <PlanetCard key={index} planet={item} />;
          else if (type === 'species') return <SpeciesCard key={index} species={item} />;
          else if (type === 'vehicles') return <VehicleCard key={index} vehicle={item} />;
        })
      ) : (
        <CircularProgress />
      )}
    </Grid>
  );
};

export default MovieDetials;
