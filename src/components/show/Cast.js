import React from 'react';

import IMAGE_PLACEHOLDER from '../../images/NoImageFound.png';

const Cast = ({ cast }) => {
  return (
    <div>
      {cast.map(({ person, character, voice }, key) => (
        <div key={key}>
          <div>
            <img
              src={person.image ? person.image.medium : IMAGE_PLACEHOLDER}
              alt="cast-person"
            />
          </div>
          <div>
            <span>
              {person.name} | {character.name} {voice ? '| Voice' : ''}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cast;
