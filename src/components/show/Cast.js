import React from 'react';

import IMAGE_PLACEHOLDER from '../../images/NoImageFound.png';
import { StyledCastList } from './Cast.styled';

const Cast = ({ cast }) => {
  return (
    <StyledCastList>
      {cast.map(({ person, character, voice }, key) => (
        <div key={key} className="cast-item">
          <div className="pic-wrapper">
            <img
              src={person.image ? person.image.medium : IMAGE_PLACEHOLDER}
              alt="cast-person"
            />
          </div>
          <div className="actor">
            <span>
              <span className="bold">{person.name} </span>| {character.name}{' '}
              {voice ? '| Voice' : ''}
            </span>
          </div>
        </div>
      ))}
    </StyledCastList>
  );
};

export default Cast;
