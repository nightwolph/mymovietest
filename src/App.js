// import { useEffect, useState } from 'react';
import Image from './images/Rectangle.jpg';
import Logo from './images/Logo.png';
import './App.css';
import Categories from './components/Categories';

// const API_URL = 'http://www.omdbapi.com?apikey=2cb53cc7';

function App() {
  // was unable get the API to work the way i wanted

  // const [movies, setMovies] = useState([]);

  // const searchMovies = async (title) => {
  //   const response = await fetch(`${API_URL}&s=${title}`);
  //   const data = await response.json();

  //   setMovies(data.search);
  // };

  // useEffect(() => {
  //   searchMovies('action');
  // }, []);

  return (
    <>
      <nav>
        <div className="container nav__logo">
          <img src={Logo} alt="company logo" />
        </div>
      </nav>
      <header>
        <div className="header__bg">
          <img src={Image} alt="people at the cinema" />
        </div>
        <div className="container header-content">
          <h1>
            Watch <br /> something <br /> incredible
          </h1>
        </div>
      </header>
      <div className="container contain-search">
        <p>Search</p>
        <div className=" search">
          <input
            type="text"
            placeholder="Search for movies"
            value="Batman"
            onChange={() => {}}
          />
        </div>
      </div>
      <Categories name="bean" type="movies" />
      <Categories name="bean" type="series" />
    </>
  );
}

export default App;

//import Axios from 'axios'; (i tried using axios, haven't really gotten the hang of it);

// OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=2cb53cc7
// 2cb53cc7
// API: http://www.omdbapi.com?apikey=2cb53cc7
