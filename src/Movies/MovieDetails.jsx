/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import moviesJson from "../json/movies.json";
import { getallMovies } from "../service/apiMovie";
import { Card } from "react-bootstrap";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);  // Initialize movie as null for better initial state handling
  const [movies, setMovies] = useState([]);  // State to keep the original list of movies

  useEffect(() => {
    const fetchMovies = async () => {
      try {
          const moviesRes = await getallMovies(id);
          setMovie(moviesRes.data);

      } catch (err) {
          console.log('Error:', err);
      }
  };
  fetchMovies();

  }, [])


  if (!movie) {
    return <div>Loading or no movie found...</div>;  // Handle loading state or no movie found
  }

  return (
    <div>
        <Card className="movie-card">
     <Card.Img
          src={movie.imageUrl || "https://via.placeholder.com/200"}
        />
        <Card.Body>
          <Card.Title>{movie.title}
          </Card.Title>
          <Card.Text>Year: {movie.year}</Card.Text>
          <Card.Text>Genre: {movie.genre}</Card.Text>
          <Card.Text>Description: {movie.description}</Card.Text>
          
        </Card.Body>
      </Card>
    </div>
  );
}

export default MovieDetails;
