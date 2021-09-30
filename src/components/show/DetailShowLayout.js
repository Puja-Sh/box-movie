import React from 'react';
import { Link } from 'react-router-dom';

import IMAGE_PLACEHOLDER from '../../images/NoImageFound.png';
import { StyledCenter } from '../../pages/Home.styled';
import { StyledStar } from '../styled';
import {
  StyledHeadline,
  StyledMainDataWrapper,
  StyledTagList,
} from './DetailShowLayout.styled';

const DetailShowLayout = ({ name, rating, summary, tags, image }) => {
  return (
    <>
      <StyledCenter>
        <Link to={'/'}>Go Back</Link>
      </StyledCenter>
      <StyledMainDataWrapper>
        <img src={image ? image.original : IMAGE_PLACEHOLDER} alt="person" />
        <div className="text-side">
          <StyledHeadline>
            <h1>{name}</h1>
            <div>
              <StyledStar active="true" />
              <span>{rating.average || 'N/A'}</span>
            </div>
          </StyledHeadline>
          <div
            className="summary"
            dangerouslySetInnerHTML={{ __html: summary }}
          />

          <div>
            Tags:
            <StyledTagList>
              {tags.map((tag, i) => (
                <span key={i}> {tag} </span>
              ))}
            </StyledTagList>
          </div>
        </div>
      </StyledMainDataWrapper>
    </>
  );
};

export default DetailShowLayout;
