import React from 'react';
import ShowCard from './ShowCard';

import { StyledFlexGrid } from '../styled';

import IMAGE_NOT_FOUND from '../../images/NoImageFound.png';

function ShowGrid({ data }) {
  return (
    <StyledFlexGrid>
      {data.map(({ show }) => (
        <ShowCard
          key={show.id}
          id={show.id}
          name={show.name}
          image={show.image ? show.image.medium : IMAGE_NOT_FOUND}
          summary={show.summary}
        />
      ))}
    </StyledFlexGrid>
  );
}

export default ShowGrid;
