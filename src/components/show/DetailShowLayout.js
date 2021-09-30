import React from 'react';

import IMAGE_PLACEHOLDER from '../../images/NoImageFound.png';
import { StyledStar } from '../styled';

const DetailShowLayout = ({ name, rating, summary, tags, image }) => {
  return (
    <div>
      <img src={image ? image.original : IMAGE_PLACEHOLDER} alt="person" />
      <div>
        <div>
          <h1>{name}</h1>
          <div>
            <StyledStar />
            <span>{rating.average || 'N/A'}</span>
          </div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: summary }} />

        <div>
          Tags:
          <div>
            {tags.map((tag, i) => {
              <span key={i}>{tag} </span>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailShowLayout;
