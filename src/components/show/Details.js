import React from 'react';
import { StyledDetailsWrapper } from './Details.styled';

const Details = ({ status, premiered, network }) => {
  return (
    <StyledDetailsWrapper>
      <div>
        <p>
          Status: <span>{status}</span>
        </p>
        <p>
          Premiered: {premiered} {network ? `on ${network.name}` : null}
        </p>
      </div>
    </StyledDetailsWrapper>
  );
};

export default Details;
