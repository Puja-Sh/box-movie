import React, { memo } from 'react';
import { StyledTitleWrapper } from './Title.styled';

function Title({ title, subtitle }) {
  return (
    <StyledTitleWrapper>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </StyledTitleWrapper>
  );
}

export default memo(Title);
