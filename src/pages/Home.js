import React, { useState } from 'react';
import MainPageLayout from '../components/MainPageLayout';
import { apiGet } from '../misc/config';

function Home() {
  const [input, setInput] = useState('');
  const [results, setResults] = useState(null);

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

  const renderResults = () => {
    if (results && results.length == 0) {
      return <div>No results, Sorry!</div>;
    }

    if (results && results.length > 0) {
      return (
        <div>
          {results.map(item => (
            <div key={item.show.id}>{item.show.name} </div>
          ))}
        </div>
      );
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
      <button type="button" onClick={searchHandler}>
        Search
      </button>
      {renderResults()}
    </MainPageLayout>
  );
}

export default Home;
