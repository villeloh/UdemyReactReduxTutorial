import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = ' AIzaSyCE7vUaGAd_RQP0Pe40xCvb8bPKcHRjVI0 ';

const App = () => {

  return (
    <div>
      <SearchBar />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('.container'));