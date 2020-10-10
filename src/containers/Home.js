import React from 'react';
import oldintern from '../default-monochrome.svg';
import '../App.css';

function Home() {
  return (
<div className="App">
      <header className="App-header">
        <img src={oldintern} className="App-logo" alt="oldintern" />
        <p>
          Edit <code>/your-resume</code> and <code>/your-linkedin</code> and save and realold
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        learn how they'll React
        </a>
      </header>
    </div>
  );
}

export default Home;
