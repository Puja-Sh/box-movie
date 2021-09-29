import React, { useState } from 'react';
import MainPageLayout from '../components/MainPageLayout';

function Home() {
  const [input, setInput] = useState('');

  const searchHandler = () => {
    // https://api.tvmaze.com/search/shows?q=girls
    fetch(`https://api.tvmaze.com/search/shows?q=${input}`)
      .then(response => response.json())
      .then(data => console.log(data));
  };

  const onInputChangeHandler = e => {
    setInput(e.target.value);
  };

  const onKeyDownHandler = e => {
    if (e.keyCode === 13) {
      searchHandler();
    }
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
    </MainPageLayout>
  );
}

export default Home;
