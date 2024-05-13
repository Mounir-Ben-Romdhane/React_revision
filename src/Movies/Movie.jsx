import React, { useState } from "react";
import { Card, Dropdown, DropdownButton } from "react-bootstrap";
import { Link } from "react-router-dom";

function Movie({ movie, onRate }) {
    const [ratings, setRatings] = useState([]);
    const [userRating, setUserRating] = useState('');const [rating, setRating] = useState("Rate this movie");  // Initial placeholder for dropdown

    const addRating = () => {
        const rating = parseFloat(userRating);
        
        if (isNaN(rating) || rating < 1 || rating > 5) {
          alert("Please enter a rating between 1 and 5");
          return;
        }
        
        setRatings([...ratings, rating]);
        setUserRating('');
      }

      let averageRating = 0;
  if (ratings.length > 0) {
    const totalRating = ratings.reduce((acc, curr) => acc + curr, 0);
    averageRating = totalRating / ratings.length;
  }

  return (
    <div>      
      <Card className="movie-card">
        <Card.Img
          variant="top"
          src={movie.imageUrl || "https://via.placeholder.com/200"}
        />
        <Card.Body>
          <Card.Title>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </Card.Title>
          <Card.Text>Year: {movie.year}</Card.Text>
          <Card.Text>Genre: {movie.genre}</Card.Text>
          <Card.Text>Description: {movie.description}</Card.Text>
          <div className="container">
      <h1>Movie Rating</h1>
      <p>{ratings.length === 0 ? 'No ratings yet' : `Average Rating: ${averageRating.toFixed(1)}`}</p>
      <input 
        type="number" 
        value={userRating}
        onChange={(e) => setUserRating(e.target.value)}
        min="1" 
        max="5" 
        step="0.1" 
        placeholder="Enter your rating (1-5)"
      />
      <button onClick={addRating}>Submit</button>
    </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Movie;

