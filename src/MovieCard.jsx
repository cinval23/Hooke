import React from 'react';
// import './MovieCard.css';
import './App.css'

const MovieCard = ({ title, description, posterURL, rating }) => {
  return (
    <div className="movie-card">
      <img src={posterURL} alt={`${title} poster`} />
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Rating: {rating}/5</p>
    </div>
  );
};

export default MovieCard;
