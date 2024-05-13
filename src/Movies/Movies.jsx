import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Movie from "./Movie";
import { getallMovies } from "../service/apiMovie";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const moviesRes = await getallMovies();
        setMovies(moviesRes.data);
        setFilteredMovies(moviesRes.data);
      } catch (err) {
        alert('Failed to fetch movies. Please try again later.');
        console.error('Error:', err);
      }
    };
    fetchMovies();
  }, []);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const filtered = movies.filter(movie => movie.title.toLowerCase().includes(title.toLowerCase()));
    setFilteredMovies(filtered);
    alert(`Search completed for title: ${title}`);
  };

  const updateRating = (movieId, newRating) => {
    const updatedMovies = movies.map(movie => 
      movie.id === movieId ? { ...movie, ratings: [...movie.ratings, newRating] } : movie
    );
    setMovies(updatedMovies);
    setFilteredMovies(updatedMovies);
  };

  return (
    <div className="card-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Search by movie title"
          value={title}
          onChange={handleTitleChange}
          aria-label="Search by movie title"
        />
        <Button type="submit">Search</Button>
      </form>
      <div style={{ display: 'flex', flexDirection: 'row', overflowX: 'scroll' }}>
        {filteredMovies.length === 0 ? "No Results Found" :
          filteredMovies.map((movie, index) => (
            <Movie key={index} movie={movie} onRate={updateRating} />
          ))
        }
      </div>
    </div>
  );
}

export default Movies;
