import React, { useState } from 'react';
import MainPageLayout from '../components/MainPageLayout';
import { apiGet } from '../misc/config';

function Home() {
  const [input, setInput] = useState('');
  const [results, setResults] = useState(null);
  const [radioOptionSearch, setradioOptionSearch] = useState('shows');

  const selectOption = radioOptionSearch === 'shows';

  const searchHandler = () => {
    apiGet(`/search/shows?q=${input}`).then(res => {
      setResults(res);
      console.log(res);
    });
  };

  const onInputChangeHandler = e => {
    setInput(e.target.value);
  };

  const onKeyDownHandler = e => {
    if (e.keyCode === 13) {
      searchHandler();
    }
  };

  const onRadioChangeHandler = e => {
    setradioOptionSearch(e.target.value);
  };

  const renderResults = () => {
    if (results && results.length == 0) {
      return <div>No results, Sorry!</div>;
    }

    if (results && results.length > 0) {
      return results[0].show
        ? results.map(item => <div key={item.show.id}>{item.show.name} </div>)
        : results.map(item => (
            <div key={item.person.id}>{item.person.name} </div>
          ));
    }
    return null;
  };

  return (
    <MainPageLayout>
      <input
        type="text"
        onChange={onInputChangeHandler}
        onKeyDown={onKeyDownHandler}
        value={input}
      />

      <div>
        <label htmlFor="shows-search">
          <input
            type="radio"
            id="shows-search"
            value="shows"
            checked={selectOption}
            onChange={onRadioChangeHandler}
          ></input>
          Movies
        </label>
        <label htmlFor="actors-search">
          <input
            type="radio"
            id="actors-search"
            value="people"
            checked={!selectOption}
            onChange={onRadioChangeHandler}
          ></input>
          Actors
        </label>
      </div>

      <button type="button" onClick={searchHandler}>
        Search
      </button>
      {renderResults()}
    </MainPageLayout>
  );
}

export default Home;
