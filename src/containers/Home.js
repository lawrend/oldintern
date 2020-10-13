import React from 'react';
import oldintern from '../default-monochrome.svg';
import { Link } from 'react-router-dom';
import '../App.css';

function Home() {
  return (
<div className="App">
      <header className="App-header">
        <img src={oldintern} className="App-logo" alt="oldintern" />
        <p>
          Edit <code>/your-resume</code> and <code>/your-linkedin</code> and sorry you're realold
        </p>
        <Link className="App-link" to="/reaction">Learn how they'll React</Link>
      </header>
    </div>
  );
}

export default Home;


// <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >

//         </a>
