import React from 'react';
import { StyledSeasonList, StyledSeasonsWrapper } from './Seasons.styled';

const Seasons = ({ seasons }) => {
  return (
    <StyledSeasonsWrapper>
      <p>
        Season in total : <span>{seasons.length}</span>
      </p>
      <p>
        Episode in total :
        <span>
          {seasons.reduce((acc, season) => acc + season.episodeOrder, 0)}
        </span>
      </p>

      <StyledSeasonList>
        {seasons.map(season => (
          <div key={season.id} className="season-item">
            <div className="left">
              <p>Season {season.number}</p>
              <p>
                Episodes : <span> {season.episodeOrder} </span>
              </p>
            </div>
            <div className="right">
              Aired :
              <span>
                {season.premieredDate} - {season.endDate}
              </span>
            </div>
          </div>
        ))}
      </StyledSeasonList>
    </StyledSeasonsWrapper>
  );
};

export default Seasons;
