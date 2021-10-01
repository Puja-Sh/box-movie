import React from 'react';
import { Link } from 'react-router-dom';
import { StyledStar } from '../styled';

import { StyledShowCard } from './ShowCard.styled';

function ShowCard({ id, name, image, summary, onStarClick, isStarred }) {
  const summaryText = summary
    ? `${summary.split(' ').slice(0, 10).join(' ').replace(/<.+?>/g, '')}...`
    : 'No description';

  return (
    <StyledShowCard>
      <div className="img-wrapper">
        <img src={image} alt="show" />
      </div>
      <h1>{name}</h1>
      <p>{summaryText}</p>

      <div className="btns">
        <Link to={`show/${id}`}>Read more</Link>
        <button type="button" onClick={() => onStarClick(id, isStarred)}>
          <StyledStar active={isStarred} />
        </button>
      </div>
    </StyledShowCard>
  );
}

export default ShowCard;
