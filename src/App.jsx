// import React, { useState } from 'react';
// import MovieList from './MovieList';
// import Filter from './Filter';

// const App = () => {
//   const [movies, setMovies] = useState([
//     // Example initial movies
//     {
//       title: 'Inception',
//       description: 'A mind-bending thriller',
//       posterURL: '/inception.jpeg',
//       rating: 5
//     },
//     {
//       title: 'Interstellar',
//       description: 'A journey through space and time',
//       posterURL: 'intersteller.jpeg',
//       rating: 4
//     },
//   ]);

//   const [filteredMovies, setFilteredMovies] = useState(movies);

//   const addMovie = (movie) => {
//     const newMovies = [...movies, movie];
//     setMovies(newMovies);
//     setFilteredMovies(newMovies);
//   };

//   const filterMovies = ({ title, rating }) => {
//     let filtered = movies;
//     if (title) {
//       filtered = filtered.filter((movie) => movie.title.toLowerCase().includes(title.toLowerCase()));
//     }
//     if (rating) {
//       filtered = filtered.filter((movie) => movie.rating >= rating);
//     }
//     setFilteredMovies(filtered);
//   };

//   return (
//     <div className="App">
//       <h1>My Movie App</h1>
//       <Filter onFilter={filterMovies} />
//       <MovieList movies={filteredMovies} />
//       {/* Add a form or modal here to add new movies */}
//       <MovieModal show={show} handleClose={handleClose} addMovie={addMovie} />
//     </div>
//   );
// };

// export default App;


import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import MovieModal from './MovieModal';
import MovieList from './MovieList';
import Filter from './Filter';

function App() {
  const [show, setShow] = useState(false);
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "A thief who steals corporate secrets through the use of dream-sharing technology.",
      posterURL: "/inception.jpeg",
      rating: 5,
    },
    {
      title: 'Interstellar',
      description: 'A journey through space and time',
      posterURL: 'intersteller.jpeg',
      rating: 4
    },
    // Add more initial movies if desired
  ]);

  const [filteredMovies, setFilteredMovies] = useState(movies);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

 const filterMovies = ({ title, rating }) => {
  let filtered = movies;
  if (title) {
    filtered = filtered.filter((movie) => movie.title.toLowerCase().includes(title.toLowerCase()));
  }
  if (rating) {
    filtered = filtered.filter((movie) => movie.rating >= rating);
  }
  setFilteredMovies(filtered);
};

  return (
    <Container>
      <h1 className="text-center my-4">My Favorite Movies</h1>
      <Button variant="primary" onClick={handleShow}>
        Add New Movie
      </Button>

      <MovieModal show={show} handleClose={handleClose} addMovie={addMovie} />
      <MovieList movies={movies} />

      <Filter onFilter={filterMovies} />
      <MovieList movies={filteredMovies} />
    </Container>
  );
}

export default App;
