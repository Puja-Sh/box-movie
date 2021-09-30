import React, { useEffect, useReducer, useState } from 'react';
import { useParams } from 'react-router';

import Cast from '../components/show/Cast';
import Details from '../components/show/Details';
import DetailShowLayout from '../components/show/DetailShowLayout';
import Seasons from '../components/show/Seasons';

import { apiGet } from '../misc/config';
import { StyledInfoBlock, StyledShowPageWrapper } from './Show.styled';

function Show() {
  const { id } = useParams();

  const reducer = (prevState, action) => {
    switch (action.type) {
      case 'FETCH_SUCCESS': {
        return { isLoading: false, error: null, show: action.show };
      }

      case 'FETCH_FAILED': {
        return { isLoading: false, error: action.error };
      }

      default:
        return prevState;
    }
  };

  const initialState = {
    show: null,
    isLoading: true,
    error: null,
  };

  const [{ isLoading, show, error }, dispatch] = useReducer(
    reducer,
    initialState
  );
  // ---- REPLACING IT WITH useReducer ----
  // const [show, setShow] = useState(null);
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`)
      .then(res => {
        setTimeout(() => {
          if (isMounted) {
            dispatch({ type: 'FETCH_SUCCESS', show: res });
            // setShow(res);
            // setIsLoading(false);
          }
        }, 1000);
      })
      .catch(err => {
        if (isMounted) {
          dispatch({ type: 'FETCH_FAILED', error: err.message });
          // setError(err.message);
          // setIsLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [id]);

  if (isLoading) {
    return <div>Data is loading, wait!!!</div>;
  }
  if (error) {
    return <div>Opps! something went wrong</div>;
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
