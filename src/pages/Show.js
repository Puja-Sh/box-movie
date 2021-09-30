import React from 'react';
import { useParams } from 'react-router';

import Cast from '../components/show/Cast';
import Details from '../components/show/Details';
import DetailShowLayout from '../components/show/DetailShowLayout';
import Seasons from '../components/show/Seasons';
import { useShow } from '../misc/custom-hooks';
import { StyledCenter } from './Home.styled';

import { StyledInfoBlock, StyledShowPageWrapper } from './Show.styled';

function Show() {
  const { id } = useParams();
  const { isLoading, error, show } = useShow(id);

  // ---- REPLACING IT WITH useReducer which is in custom hooks file ----
  // const [show, setShow] = useState(null);
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState(null);

  if (isLoading) {
    return <StyledCenter>Data is loading, wait!!!</StyledCenter>;
  }
  if (error) {
    return <StyledCenter>Opps! something went wrong</StyledCenter>;
  }
  return (
    <StyledShowPageWrapper>
      <DetailShowLayout
        image={show.image}
        name={show.name}
        rating={show.rating}
        summary={show.summary}
        tags={show.genres}
      />
      <StyledInfoBlock>
        <h2>Details</h2>
        <Details
          status={show.status}
          network={show.network}
          premiered={show.premiered}
        />
      </StyledInfoBlock>

      <StyledInfoBlock>
        <h2>Seasons</h2>
        <Seasons seasons={show._embedded.seasons} />
      </StyledInfoBlock>

      <StyledInfoBlock>
        <h2>Cast</h2>
        <Cast cast={show._embedded.cast} />
      </StyledInfoBlock>
    </StyledShowPageWrapper>
  );
}

export default Show;
