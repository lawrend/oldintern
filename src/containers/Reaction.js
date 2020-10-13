import React from 'react';
import { Link } from 'react-router-dom';
import withLogo from '../slogan-default-monochrome.svg';

function Reaction() {
  return (
<div className="App">
      <header className="App-header">
        <img src={withLogo} alt="withLogo" />
        <Link className="App-link" to="/home">home</Link>
      </header>
    </div>
  );
}

export default Reaction;



