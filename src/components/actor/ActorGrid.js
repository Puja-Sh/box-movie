import React from 'react';
import ActorCard from './ActorCard';

import { StyledFlexGrid } from '../styled';

import IMAGE_NOT_FOUND from '../../images/NoImageFound.png';

function ActorGrid({ data }) {
  return (
    <StyledFlexGrid>
      {data.map(({ person }) => (
        <ActorCard
          key={person.id}
          id={person.id}
          name={person.name}
          country={person.country ? person.country.name : null}
          birthday={person.birthday}
          deathday={person.deathday}
          gender={person.gender}
          image={person.image ? person.image.medium : IMAGE_NOT_FOUND}
        />
      ))}
    </StyledFlexGrid>
  );
}

export default ActorGrid;
