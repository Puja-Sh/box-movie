import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { apiGet } from '../misc/config';

function Show() {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`)
      .then(res => {
        setTimeout(() => {
          if (isMounted) {
            setShow(res);
            setIsLoading(false);
          }
        }, 2000);
      })
      .catch(err => {
        if (isMounted) {
          setError(err.message);
          setIsLoading(true);
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
  return <div></div>;
}

export default Show;
