import React, { useCallback, useState } from 'react';
import ActorGrid from '../components/actor/ActorGrid';
import CustomRadio from '../components/CustomRadio';
import MainPageLayout from '../components/MainPageLayout';
import ShowGrid from '../components/show/ShowGrid';

import { apiGet } from '../misc/config';
import { useLastQuery } from '../misc/custom-hooks';
import {
  StyledCenter,
  StyledRadioInputsWrapper,
  StyledSearchButtonWrapper,
  StyledSearchInput,
} from './Home.styled';

const renderResults = results => {
  if (results && results.length == 0) {
    return <StyledCenter>No results, Sorry :(</StyledCenter>;
  }

  if (results && results.length > 0) {
    return results[0].show ? (
      <ShowGrid data={results} />
    ) : (
      <ActorGrid data={results} />
    );
  }
  return null;
};

function Home() {
  const [input, setInput] = useLastQuery();
  const [results, setResults] = useState(null);
  const [radioOptionSearch, setradioOptionSearch] = useState('shows');

  const selectOption = radioOptionSearch === 'shows';

  const searchHandler = () => {
    apiGet(`/search/${radioOptionSearch}?q=${input}`).then(res => {
      setResults(res);
    });
  };

  const onInputChangeHandler = useCallback(e => {
    setInput(e.target.value);
  }, []);

  const onKeyDownHandler = useCallback(e => {
    if (e.keyCode === 13) {
      searchHandler();
    }
  }, []);

  //only one copy of radioChangeHandler using useCallback
  const onRadioChangeHandler = useCallback(e => {
    setradioOptionSearch(e.target.value);
  }, []);

  return (
    <MainPageLayout>
      <StyledSearchInput
        type="text"
        onChange={onInputChangeHandler}
        onKeyDown={onKeyDownHandler}
        value={input}
      />

      <StyledRadioInputsWrapper>
        <div>
          <CustomRadio
            label="Movies"
            id="shows-search"
            value="shows"
            checked={selectOption}
            onChange={onRadioChangeHandler}
          />
        </div>
        <div>
          <CustomRadio
            label="Actors"
            id="actors-search"
            value="people"
            checked={!selectOption}
            onChange={onRadioChangeHandler}
          />
        </div>
      </StyledRadioInputsWrapper>

      <StyledSearchButtonWrapper>
        <button type="button" onClick={searchHandler}>
          Search
        </button>
      </StyledSearchButtonWrapper>
      {renderResults(results)}
    </MainPageLayout>
  );
}

export default Home;
