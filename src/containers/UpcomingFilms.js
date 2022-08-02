import React, {useState} from 'react';
import UpcomingList from '../components/UpcomingList';
import FilmForm from '../components/newFilmForm';

const UpcomingFilms = () => {
  const [UpcomingFilmsList, setUpcomingFilms] = useState([
    {
      id: 1,
      name: "Spider-Man: Into the Spider-Verse",
      url: "https://www.imdb.com/title/tt4633694/?ref_=rlm"
    },
    {
      id: 2,
      name: "Life Itself",
      url: "https://www.imdb.com/title/tt5989218/?ref_=rlm"
    },
    {
      id: 3,
      name: "Mary Queen of Scots",
      url: "https://www.imdb.com/title/tt2328900/?ref_=rlm"
    },
    {
      id: 4,
      name: "The Lego Movie 2: The Second Part", url: "https://www.imdb.com/title/tt3513498/?ref_=rlm"
    },
    {
      id: 5,
      name: "Captain Marvel",
      url: "https://www.imdb.com/title/tt4154664/?ref_=rlm"
    }
  ])

  const addFilm = (submittedFilm) => {
    submittedFilm.id = Date.now();
    const updatedFilms = [...UpcomingFilmsList, submittedFilm];
    setUpcomingFilms(updatedFilms)
  }

  return (<>
  <h1>Upcoming Films</h1>
  <UpcomingList UpcomingFilmsList ={UpcomingFilmsList}/>
  <a href='https://www.imdb.com/calendar/?region=gb'>View Upcoming Films</a>
  <FilmForm onFilmSubmit={ (film) => addFilm(film) }/>
  </>);
}

export default UpcomingFilms;