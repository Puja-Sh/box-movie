import React, { memo, useCallback } from 'react';
import ShowCard from './ShowCard';

import { StyledFlexGrid } from '../styled';

import IMAGE_NOT_FOUND from '../../images/NoImageFound.png';
import { useShows } from '../../misc/custom-hooks';

function ShowGrid({ data }) {
  const [starredShows, dispatchStarred] = useShows();

  return (
    <StyledFlexGrid>
      {data.map(({ show }) => {
        const isStarred = starredShows.includes(show.id);

        const onStarClickHandler = useCallback(() => {
          if (isStarred) {
            dispatchStarred({ type: 'REMOVE', showId: show.id });
          } else {
            dispatchStarred({ type: 'ADD', showId: show.id });
          }
        }, [isStarred, show.id]);

        return (
          <ShowCard
            key={show.id}
            id={show.id}
            name={show.name}
            image={show.image ? show.image.medium : IMAGE_NOT_FOUND}
            summary={show.summary}
            onStarClick={onStarClickHandler}
            isStarred={isStarred}
          />
        );
      })}
    </StyledFlexGrid>
  );
}

export default memo(ShowGrid);
